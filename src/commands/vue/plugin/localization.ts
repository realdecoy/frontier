// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
// eslint-disable-next-line unicorn/import-style, unicorn/prefer-module
const util = require('util');
const exec = util.promisify(shell.exec);
// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import path from 'node:path';
import { Command, Flags, ux } from '@oclif/core';
import { Files, ModuleConfig } from '../../../modules';
import { checkProjectValidity, isJsonString } from '../../../lib/utilities';
import { VUE_CLI_COMMANDS, CLI_STATE, VUE_DYNAMIC_OBJECTS } from '../../../lib/constants';
import { injectImportsIntoMain, injectModulesIntoMain } from '../../../lib/plugins';
import { copyFiles, parseDynamicObjects, parseVueModuleConfig, updateDynamicImportsAndExports } from '../../../lib/files';

const TEMPLATE_FOLDERS = ['localization'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
]);

export default class Localization extends Command {
  // static aliases = ['vue plugin localization']

  static description = 'adds i18bn localization'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    forceProject: Flags.string({ hidden: true }),
    skipInstall: Flags.boolean({ hidden: true }),
    vue2: Flags.boolean({ hidden: true }),
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

  async handleVue2(config: ModuleConfig, projectName: string | undefined, projectRoot: string) {
    const { flags, args } = await this.parse(Localization);

    const isTest = flags.isTest === true;
    const skipInstallStep = flags.skipInstall === true;
    const preInstallCommand = projectName !== undefined ? `cd ${projectName} &&` : '';
    let sourceDirectory = '';
    let installDirectory = '';


    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');
    const devDependencies = config.manifest.packages.devDependencies.toString()
      .split(',')
      .join(' ');

    if (skipInstallStep === false) {
      try {
        // install dev dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing localization dev dependencies`);
        }

        await exec(`${preInstallCommand} npm install --save-dev --legacy-peer-deps ${devDependencies}`, { silent: true });

        if (isTest !== true) {
          ux.action.stop();
        }

        // install dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing localization dependencies`);
        }

        await exec(`${preInstallCommand} npm install --save --legacy-peer-deps ${dependencies}`, { silent: true });

        if (isTest !== true) {
          ux.action.stop();
        }
      } catch {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} localization dependencies failed to install`,
          }),
        );
      }
    } else {
      if (isTest !== true) {
        ux.action.start(`${CLI_STATE.Info} adding localization dependencies`);
      }

      await exec(`cd ${projectName} && npx add-dependencies ${devDependencies} --save-dev`, { silent: true });
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

  async run(): Promise<void> {
    const { flags, args } = await this.parse(Localization);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const projectName = flags.forceProject;
    const isTest = flags.isTest === true;
    const skipInstallStep = flags.skipInstall === true;
    const hasProjectName = projectName !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const validityResponse = checkProjectValidity();
    const { isValid: isValidProject } = validityResponse;
    let { projectRoot } = validityResponse;
    // block command unless being run within an frontier project
    if (isValidProject === false && !hasProjectName) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${VUE_CLI_COMMANDS.PluginLocalization} command must be run in an existing ${chalk.yellow('frontier')} project`,
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

    // If Vue 2
    if(flags.vue2) {
      await this.handleVue2(config, projectName, projectRoot);
      
      return Promise.resolve();
    }

    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');

    if (skipInstallStep === false) {
      try {
        // install dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing localization dependencies`);
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
        ux.action.start(`${CLI_STATE.Info} adding localization dependencies`);
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
      this.log(`${CLI_STATE.Success} plugin added: localization.`);
    }
  }
}
