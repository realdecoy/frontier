// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import path from 'node:path';
import { Args, Command, Flags } from '@oclif/core';
import { Files } from '../../../modules';
import { VUE_CLI_COMMANDS, CLI_STATE, VUE_DOCUMENTATION_LINKS } from '../../../lib/constants';
import { copyFiles, parseVueModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, parseComponentName, isJsonString, toKebabCase, toPascalCase } from '../../../lib/utilities';

const TEMPLATE_FOLDERS = ['component'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Component extends Command {
  // static aliases = ['vue add component']

  static description = 'add a new Component module.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new component' }),
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
          message: `${VUE_CLI_COMMANDS.AddComponent} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(Component);
    const folderList = TEMPLATE_FOLDERS;
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseVueModuleConfig(folderList, projectRoot);

    // retrieve component name
    const componentName = await parseComponentName(args);
    // parse kebab and pascal case of componentName
    const componentNameKebab = toKebabCase(componentName);
    const componentNamePascal = toPascalCase(componentName);

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, componentNameKebab);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, componentNameKebab);
      // copy and update files for component being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateFeatureFiles(installDirectory, files, componentNameKebab, componentNamePascal);
    });

    this.log(`${CLI_STATE.Success} component added: ${componentNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(VUE_DOCUMENTATION_LINKS.Component)}\n`);
  }
}
