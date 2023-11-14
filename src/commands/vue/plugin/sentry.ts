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
import { copyFiles, parseDynamicObjects, parseVueModuleConfig } from '../../../lib/files';
import { checkProjectValidity, isJsonString } from '../../../lib/utilities';
import { VUE_CLI_COMMANDS, CLI_STATE, VUE_DYNAMIC_OBJECTS } from '../../../lib/constants';
import { injectImportsIntoMain, injectModulesIntoMainVue3 as injectModulesIntoMain } from '../../../lib/plugins';

const TEMPLATE_FOLDERS = ['sentry'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
]);

export default class Sentry extends Command {

  static description = 'third party service to track errors and monitor performance';

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    forceProject: Flags.string({ hidden: true }),
    addSentryDsn: Flags.string({ hidden: true }),
    skipInstall: Flags.boolean({ hidden: true }),
  };

  static args = {};

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
    const { flags, args } = await this.parse(Sentry);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const projectName = flags.forceProject;
    const sentryDsn = flags.addSentryDsn;
    const isTest = flags.isTest === true;
    const skipInstallStep = flags.skipInstall === true;
    const hasProjectName = projectName !== undefined;
    const hasSentryDsn = sentryDsn !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const validityResponse = checkProjectValidity();
    const { isValid: isValidProject } = validityResponse;
    let { projectRoot } = validityResponse;
    // block command unless being run within an frontier project
    if (isValidProject === false && !hasProjectName) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${VUE_CLI_COMMANDS.PluginSentry} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    } else if (hasProjectName) {
      const dir = path.join(process.cwd(), projectName ?? '');
      projectRoot = dir.trim();
    }

    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory = '';
    let installDirectory = '';

    // parse config files required for scaffolding this module
    this.log(`folderList: ${folderList}, projectRoot: ${projectRoot}`)
    const configs = parseVueModuleConfig(folderList, projectRoot);
    this.log(`configs: ${configs}`);
    const config = configs[0];
    this.log(`config: ${config}`);
    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');
    this.log(`dependencies: ${dependencies}`);
    const devDependencies = config.manifest.packages.devDependencies.toString()
      .split(',')
      .join(' ');
    this.log(`devDependencies: ${devDependencies}`);
    if (skipInstallStep === false) {
      try {
        // install dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing sentry dependencies`);
        }

        await exec(`${preInstallCommand} npm install --save --legacy-peer-deps ${dependencies}`, { silent: true });

        if (isTest !== true) {
          ux.action.stop();
        }

      } catch {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} sentry dependencies failed to install`,
          }),
        );
      }
    } else {
      if (isTest !== true) {
        ux.action.start(`${CLI_STATE.Info} adding sentry dependencies`);
      }

      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });

      if (isTest !== true) {
        ux.action.stop();
      }
    }

    sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
    installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory);

    // copy files for plugin being added
    await copyFiles(sourceDirectory, installDirectory, files);
    await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.routes, null, 1), VUE_DYNAMIC_OBJECTS.Routes);
    await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.vueOptions, null, 1), VUE_DYNAMIC_OBJECTS.Options, true);

    if (config.manifest.version >= TEMPLATE_MIN_VERSION_SUPPORTED) {
      const { imports: mainImports, modules: mainModules } = config.manifest.main;
      injectImportsIntoMain(projectRoot, mainImports);
      try {
        injectModulesIntoMain(projectRoot, mainModules);
      } catch {
        this.error(
          JSON.stringify({
            code: 'import-injection-error',
            message: `${this.id?.split(':')[1]} failed to inject import statements`,
          }),
        );
      }
    } else {
      // FP-414: backwards compatibility
      await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.modules, null, 1), VUE_DYNAMIC_OBJECTS.Modules, true);
    }

    if (skipInstallStep === false) {
      this.log(`${CLI_STATE.Success} plugin added: ${this.id?.split(':')[1]}`);
    }
  }
}
