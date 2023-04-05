// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import path from 'node:path';
import { Args, Command, Flags } from '@oclif/core';
import { Files } from '../../../modules';
import { CLI_STATE, VUE_CLI_COMMANDS, VUE_DOCUMENTATION_LINKS } from '../../../lib/constants';
import { copyFiles, parseVueModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, parseLayoutName, isJsonString, toKebabCase, toPascalCase } from '../../../lib/utilities';

const TEMPLATE_FOLDERS = ['layout'];
const CUSTOM_ERROR_MESSAGES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Layout extends Command {
  // static aliases = ['vue add layout']

  static description = 'add a new Layout module.'

  static flags = {
    help: Flags.help({ char: 'h' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new layout' }),
  }

  // override Command class error handler
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
    if (CUSTOM_ERROR_MESSAGES.has(customErrorCode)) {
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
          message: `${VUE_CLI_COMMANDS.AddLayout} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const { args } = await this.parse(Layout);
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;
    // let templateFile: string;

    const configs = parseVueModuleConfig(folderList, projectRoot);

    const layoutName = await parseLayoutName(args);
    // parse kebab and pascal case of layoutName
    const layoutNameKebab = toKebabCase(layoutName);
    const layoutNamePascal = toPascalCase(layoutName);

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, layoutNameKebab);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, layoutNameKebab);

      // copy and update files for page being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateFeatureFiles(installDirectory, files, layoutNameKebab, layoutNamePascal);
    });

    this.log(`${CLI_STATE.Success} layout added: ${layoutNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(VUE_DOCUMENTATION_LINKS.Layout)}\n`);
  }
}
