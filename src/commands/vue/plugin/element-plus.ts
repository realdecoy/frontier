// eslint-disable-next-line unicorn/import-style, unicorn/prefer-module
const util = require('util');
// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
const exec = util.promisify(shell.exec);
import path from 'node:path';
import { Command, Flags, ux } from '@oclif/core';
import { Files } from '../../../modules';
import { injectImportsIntoMain } from '../../../lib/plugins';
import { VUE_CLI_COMMANDS, CLI_STATE } from '../../../lib/constants';
import { checkProjectValidity, isJsonString } from '../../../lib/utilities';
import { copyFiles, parseVueModuleConfig, updateDynamicImportsAndExports } from '../../../lib/files';

const TEMPLATE_FOLDERS = ['element-plus'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
]);

export default class ElementPlus extends Command {
  static description = 'UI component library for Vue 3'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    forceProject: Flags.string({ hidden: true }),
    skipInstall: Flags.boolean({ hidden: true }),
  }

  static args = {}

  // override Command class error handler
  catch(error: Error): Promise<any> {
    const errorMessage = error.message;
    const isValidJSON = isJsonString(errorMessage);
    const parsedError = isValidJSON ? JSON.parse(errorMessage) : {};
    const customErrorCode = parsedError.code;
    const customErrorMessage = parsedError.message;
    const hasCustomErrorCode = customErrorCode !== undefined;
    const hasNonExistentFlagError = errorMessage.includes('Nonexistent flag');

    if (hasNonExistentFlagError) {
      this.log(`${CLI_STATE.Error} Flag not found. See more with --help`);
    } else if (!hasCustomErrorCode) {
      // throw cli errors to be handled globally
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
      throw errorMessage;
    } else if (CUSTOM_ERROR_CODES.has(customErrorCode)) { // handle errors thrown with known error codes
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
  }

  handleHelp(args: (string | undefined)[], flags: {
    help: boolean;
  }): void {
    if (flags.help === true) { // Exit execution which will show help menu for help flag
      this.exit(0);
    }
  }

  async run(): Promise<void> {
    const { flags, args } = await this.parse(ElementPlus);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const projectName = flags.forceProject;
    const isTest = flags.isTest === true;
    const skipInstallStep = flags.skipInstall === true;
    const hasProjectName = projectName !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const projectValidity = checkProjectValidity();
    const { isValid: isValidProject } = projectValidity;
    let { projectRoot } = projectValidity;

    // block command unless being run within an frontier project
    if (isValidProject === false && !hasProjectName) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${VUE_CLI_COMMANDS.PluginBuefy} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    } else if (hasProjectName) {
      const dir = path.join(process.cwd(), projectName ?? '');
      projectRoot = dir.trim();
    }

    const folderList = TEMPLATE_FOLDERS;

    // parse config files required for scaffolding this module
    const configs = parseVueModuleConfig(folderList, projectRoot);
    const config = configs[0];
    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');

    if (skipInstallStep === false) {
      try {
        // install dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing element plus dependencies`);
        }

        await exec(`${preInstallCommand} npm install --save --legacy-peer-deps ${dependencies}`, { silent: true });

        if (isTest !== true) {
          ux.action.stop();
        }
      } catch {
        this.error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} dependencies failed to install`,
          }),
        );
      }
    } else {
      if (isTest !== true) {
        ux.action.start(`${CLI_STATE.Info} adding element plus dependencies`);
      }

      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });

      if (isTest !== true) {
        ux.action.stop();
      }
    }

    const sourceDirectory: string = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
    const installDirectory: string = path.join(projectRoot, 'src', config.manifest.installDirectory);

    // copy and update files for plugin being added
    await copyFiles(sourceDirectory, installDirectory, files);

    const { manifest: { modules } } = config;

    const moduleLocations = Object.keys(modules);
    for (const location of moduleLocations) {
      const localizationArr = location.split('/');
      const filename = localizationArr[localizationArr.length - 1];
      updateDynamicImportsAndExports(
        projectRoot,
        `modules/${localizationArr.filter((l, i) => i !== localizationArr.length - 1).join('/')}`,
        modules[location],
        filename
      );
    }

    if (skipInstallStep === false) {
      this.log(`${CLI_STATE.Success} plugin added: element-plus.`);
    }
  }
}
