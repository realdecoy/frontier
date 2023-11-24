// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import path from 'node:path';
import { Args, Command, Flags } from '@oclif/core';
import { Files } from '../../../modules';
import { VUE_CLI_COMMANDS, CLI_STATE, VUE_DOCUMENTATION_LINKS } from '../../../lib/constants';
import { copyFiles, parseVueModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../../lib/files';
import { checkProjectValidity, parseServiceName, isJsonString, toKebabCase, toPascalCase } from '../../../lib/utilities';

const TEMPLATE_FOLDERS = ['service'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
]);

export default class Service extends Command {
  // static aliases = ['vue add service']

  static description = 'add a new Service module.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new service' }),
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
          message: `${VUE_CLI_COMMANDS.AddService} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(Service);
    const folderList = TEMPLATE_FOLDERS;
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseVueModuleConfig(folderList, projectRoot);

    // retrieve service name
    const serviceName = await parseServiceName(args);
    // parse kebab and pascal case of serviceName
    const serviceNameKebab = toKebabCase(serviceName);
    const serviceNamePascal = toPascalCase(serviceName);

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, serviceNameKebab);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory);

      // copy and update files for service being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateFeatureFiles(installDirectory, files, serviceNameKebab, serviceNamePascal);
    });

    this.log(`${CLI_STATE.Success} service added: ${serviceNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(VUE_DOCUMENTATION_LINKS.Service)}\n`);
  }
}
