// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
// eslint-disable-next-line unicorn/import-style, unicorn/prefer-module
const util = require('util');
const exec = util.promisify(shell.exec);
// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import path from 'node:path';
import { Args, Command, Flags, ux } from '@oclif/core';
import { Files } from '../../../modules';
import { copyFiles, parseDynamicObjects, parseMobileModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames, updateDynamicImportsAndExports } from '../../../lib/files';
import { checkProjectValidity, isJsonString, parseComponentName, parseNavigationOptions, toKebabCase, toPascalCase } from '../../../lib/utilities';
import { MOBILE_CLI_COMMANDS, CLI_STATE, MOBILE_DYNAMIC_OBJECTS } from '../../../lib/constants';
import { injectImportsIntoMain, injectModulesIntoMain } from '../../../lib/plugins';

const ROOT_LOCATION = 'navigation';
const TEMPLATE_FOLDERS = [ROOT_LOCATION];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
]);

export default class Navigation extends Command {
  static description = 'adds navigation required functions'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    forceProject: Flags.string({ hidden: true }),
    skipInstall: Flags.boolean({ hidden: true }),
  }

  static args = {
    navigationType: Args.string({ name: 'navigator type', description: 'type of navigation' }),
  }

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
    const { flags, args } = await this.parse(Navigation);
    const { skipInstall, isTest, forceProject: projectName } = flags;
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);
    const hasProjectName = projectName !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const validityResponse = checkProjectValidity();
    const { isValid: isValidProject } = validityResponse;
    let { projectRoot } = validityResponse;
    // block command unless being run within an mobile project
    if (isValidProject === false && !hasProjectName) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${MOBILE_CLI_COMMANDS.PluginNavigation} command must be run in an existing ${chalk.yellow('mobile')} project`,
        }),
      );
    } else if (hasProjectName) {
      const dir = path.join(process.cwd(), projectName ?? '');
      projectRoot = dir.trim();
    }

    // retrieve component name
    const componentName = await parseComponentName(args);

    // Parse navigation type
    const type = await parseNavigationOptions();

    const folderList = TEMPLATE_FOLDERS;
    const navigationFiles = ['gesture-handler', type];
    navigationFiles.forEach(folder => folderList.push(`navigation/${folder}`));
    
    let sourceDirectory = '';
    let installDirectory = '';

    // parse config files required for scaffolding this module
    const configs = parseMobileModuleConfig(folderList, projectRoot);
    let dependencies = '';
    
    for (const config of configs) {
      if(config.manifest.packages && config.manifest.packages.dependencies) {
        dependencies += dependencies.length > 0  ? ' ' : '';
        dependencies += config.manifest.packages.dependencies.toString()
        .split(',')
        .join(' ');
      }
    }

    if (!skipInstall) {
      try {
        // install dependencies
        if (isTest !== true) {
          ux.action.start(`${CLI_STATE.Info} installing navigation dependencies`);
        }

        await exec(`${preInstallCommand} npm install --save ${dependencies}`, { silent: true });

        if (isTest !== true) {
          ux.action.stop();
        }
      } catch {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} navigation dependencies (${dependencies}) failed to install`,
          }),
        );
      }
    } else {
      if (isTest !== true) {
        ux.action.start(`${CLI_STATE.Info} adding navigation dependencies`);
      }
      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });

      if (isTest !== true) {
        ux.action.stop();
      }
    }

    // parse kebab and pascal case of componentName
    const componentNameKebab = toKebabCase(componentName);
    const componentNamePascal = toPascalCase(componentName);

    for await (const [i, config] of configs.entries()) {
      const { moduleTemplatePath, manifest } = config;
      const files: Array<string | Files> = manifest.files;
      sourceDirectory = path.join(moduleTemplatePath, manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', manifest.installDirectory);

      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, componentNameKebab);
      // copy files for plugin being added
      copyFiles(sourceDirectory, installDirectory, manifest.files);
      readAndUpdateFeatureFiles(installDirectory, files, componentNameKebab, componentNamePascal);
  
      if(Array.isArray(manifest.moduleImports)) {
        // update imports
        updateDynamicImportsAndExports(projectRoot, manifest.installDirectory, manifest.moduleImports, 'index.ts');
      }
    }


    if (skipInstall === false) {
      this.log(`${CLI_STATE.Success} plugin added: ${this.id?.split(':')[1]}`);
    }
  }
}
