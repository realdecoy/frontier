import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import { parseComponentName, toKebabCase, isJsonString, checkSpectreProjectValidity, toPascalCase } from '../../../lib/utilities.js';
import { CLI_STATE, MOBILE_DOCUMENTATION_LINKS } from '../../../lib/constants.js';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Component extends Command {
  // static aliases = ['spectre add page-object'];

  static description = 'add a new page object file.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    type: Flags.string({ hidden: true, char: 't', default: 'class' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new page object' }),
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
    const isValidProject = checkSpectreProjectValidity();
    // block command unless being run within a spectre project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          // message: `${MOBILE_CLI_COMMANDS.AddComponent} command must be run in an existing ${chalk.yellow('spectre')} project`,
          message: `spectre add page-object command must be run in an existing ${chalk.yellow('spectre')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(Component);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    // retrieve page object name
    const pageObjectName = await parseComponentName(args);
    // parse kebab and pascal case of pageObjectName
    const pageObjectNameKebab = toKebabCase(pageObjectName);
    const pageObjectNamePascal = toPascalCase(pageObjectName);
    try {
      const { generate, parseFromURL } = await import('@rd-page-object-generator/core');
      const pageObjectData = await parseFromURL('https://the-internet.herokuapp.com/checkboxes');
      const pageObject = await generate(
        pageObjectData,
        {
          importsSnippet: 'import BasePage from "../base.page";.js',
          xpath: false,
          indentSize: 2,
          spacing: 'Tabs',
          title: pageObjectNamePascal,
          methodsOnly: false,
          extendsSnippet: 'extends BasePage',
          elementTypeParam: false,
          selectorFuncSnippet: '$',
        },
      );
      this.log(pageObject);
    } catch (error) {
      this.log((error as Error).message);
    }

    this.log(`${CLI_STATE.Success} page object added: ${pageObjectNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(MOBILE_DOCUMENTATION_LINKS.Component)}\n`);
  }
}
