// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
// const shell = require('shelljs');
import { Args, Command, Flags } from '@oclif/core';
import path from 'node:path';
import { DOTNET_CLI_COMMANDS, CLI_STATE, DOTNET_DOCUMENTATION_LINKS } from '../../../lib/constants';
import { copyFiles, parseDotnetModuleConfig, readAndUpdateDotnetFeatureFiles, readProjectConfig, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, isJsonString, toKebabCase, parseCommandName, parseApiFeatures } from '../../../lib/utilities';
import { Files } from '../../../modules';
import { ProjectConfig } from '../../../modules/project';

const TEMPLATE_FOLDERS = ['query'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Query extends Command {
  // static aliases = ['dotnet add query']

  static description = 'add a new query'

  static flags = {
    help: Flags.boolean({ hidden: false }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of the new query' }),
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

    const { args, flags } = await this.parse(Query);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseDotnetModuleConfig(folderList, projectRoot);

    // pick previous migration
    const featureName = await parseApiFeatures(args, projectName as string, 'query');

    // retrieve component name
    const queryName = await parseCommandName(args);
    // parse kebab and pascal case of componentName
    const queryNameKebab = toKebabCase(queryName);
    // const queryNamePascal = toPascalCase(queryName);

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      config.manifest.installDirectory = config.manifest.installDirectory.replace('__PROJECT_NAME__', projectName);
      config.manifest.installDirectory = config.manifest.installDirectory.replace('__QUERY_NAME__', queryName);
      config.manifest.installDirectory = config.manifest.installDirectory.replace('__FEATURE_NAME__', featureName);

      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, queryName);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory);
      // copy and update files for query being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateDotnetFeatureFiles(installDirectory, files, queryNameKebab, queryName, undefined, projectName, featureName);
    });

    this.log(`${CLI_STATE.Success} query added: ${queryName}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOTNET_DOCUMENTATION_LINKS.Query)}\n`);
  }
}
