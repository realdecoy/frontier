// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
// const shell = require('shelljs');
import { Args, Command, Flags } from '@oclif/core';
import path from 'node:path';
import { DOTNET_CLI_COMMANDS, CLI_STATE } from '../../../lib/constants';
import { copyFiles, parseDotnetModuleConfig, readAndUpdateDotnetFeatureFiles, readProjectConfig, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, isJsonString, parseEndpointName, toKebabCase } from '../../../lib/utilities';
import { Files } from '../../../modules';
import { ProjectConfig } from '../../../modules/project';

const TEMPLATE_FOLDERS = ['endpoint'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Endpoint extends Command {
  // static aliases = ['dotnet add endpoint']

  static description = 'add a new endpoint'

  static flags = {
    help: Flags.help({ char: 'h' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of the new endpoint' }),
  }

  // override endpoint class error handler
  catch(error: Error): Promise<any> {
    const errorMessage = error.message;
    const isValidJSON = isJsonString(errorMessage);
    const parsedError = isValidJSON ? JSON.parse(errorMessage) : {};
    const customErrorCode = parsedError.code;
    const customErrorMessage = parsedError.message;
    const hasCustomErrorCode = customErrorCode !== undefined;

    if (hasCustomErrorCode === false) {
      // throw cli errors to be handled globally
      throw errorMessage;
    }

    // handle errors thrown with known error codes
    if (CUSTOM_ERROR_CODES.has(customErrorCode)) {
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an frontier project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${DOTNET_CLI_COMMANDS.AddConfiguration} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const projectConfig: ProjectConfig = readProjectConfig();
    const projectName = projectConfig.projectName;

    const { args } = await this.parse(Endpoint);
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseDotnetModuleConfig(folderList, projectRoot);

    // retrieve component name
    const endpointName = await parseEndpointName(args);
    // parse kebab and pascal case of componentName
    const endpointNameKebab = toKebabCase(endpointName);
    // const endpointNamePascal = toPascalCase(endpointName);
    const endpointNameLower = endpointName.toLowerCase();

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      config.manifest.installDirectory = config.manifest.installDirectory.replace('__PROJECT_NAME__', projectName);
      config.manifest.installDirectory = config.manifest.installDirectory.replace('__ENDPOINT_NAME__', endpointName);

      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, endpointName);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory);
      // copy and update files for command being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateDotnetFeatureFiles(installDirectory, files, endpointNameKebab, endpointName, undefined, projectName, undefined, endpointNameLower);
    });
  }
}
