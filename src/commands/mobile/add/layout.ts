import { Args, Command, Flags } from '@oclif/core';
import path from 'node:path';
import chalk from 'chalk';
import { Files } from '../../../modules';
import { copyFiles, parseMobileModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, parseLayoutName, toKebabCase, toPascalCase, isJsonString } from '../../../lib/utilities';
import { MOBILE_CLI_COMMANDS, CLI_STATE, MOBILE_DOCUMENTATION_LINKS } from '../../../lib/constants';

const TEMPLATE_FOLDERS = ['layout'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Layout extends Command {
  // static aliases = ['mobile add layout']

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
    if (CUSTOM_ERROR_CODES.has(customErrorCode)) {
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an mobile project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${MOBILE_CLI_COMMANDS.AddLayout} command must be run in an existing ${chalk.yellow('mobile')} project`,
        }),
      );
    }

    const { args } = await this.parse(Layout);
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseMobileModuleConfig(folderList, projectRoot);

    // retrieve component name
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

      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, config.manifest.installWithinFolder ? layoutNameKebab : '');
      // copy and update files for component being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateFeatureFiles(installDirectory, files, layoutNameKebab, layoutNamePascal);
    });

    this.log(`${CLI_STATE.Success} component added: ${layoutNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(MOBILE_DOCUMENTATION_LINKS.Component)}\n`);
  }
}
