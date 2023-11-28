import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import {
  toKebabCase,
  isJsonString,
  checkSpectreProjectValidity,
  toPascalCase,
  parsePageObjectName,
  parsePageObjectUrl,
} from '../../../lib/utilities.js';
import {
  CLI_STATE,
  EMPTY_PAGE_OBJECT_DATA,
  SPECTRE_CLI_COMMANDS,
  SPECTRE_DOCUMENTATION_LINKS,
} from '../../../lib/constants.js';
import { generate, parseFromURL } from '@rd-page-object-generator/core';
import { writeFile } from '../../../lib/files.js';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class PageObject extends Command {
  // static aliases = ['spectre add page-object'];

  static description = 'add a new page object file.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    type: Flags.string({ hidden: true, char: 't', default: 'class' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new page object' }),
    URL: Args.string({ name: 'URL', description: 'URL of new page object', required: false }),
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
          message: `${SPECTRE_CLI_COMMANDS.AddPageObject} command must be run in an existing ${chalk.yellow('spectre')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(PageObject);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    // retrieve page object name
    const pageObjectName = await parsePageObjectName(args);
    const pageObjectUrl = await parsePageObjectUrl(args);
    // parse kebab and pascal case of pageObjectName
    const pageObjectNameKebab = toKebabCase(pageObjectName);
    const pageObjectNamePascal = toPascalCase(pageObjectName);
    const pageObjectData = pageObjectUrl ? await parseFromURL(pageObjectUrl) : EMPTY_PAGE_OBJECT_DATA;
    const pageObject = await generate(
      pageObjectData,
      {
        importsSnippet: 'import BasePage from "./page";',
        xpath: false,
        indentSize: 1,
        spacing: 'Tabs',
        title: pageObjectNamePascal,
        methodsOnly: false,
        extendsSnippet: 'BasePage',
        elementTypeParam: false,
        selectorFuncSnippet: '$',
      },
    );
    writeFile(`./src/page_objects/${pageObjectNameKebab}.page.ts`, pageObject);

    this.log(`${CLI_STATE.Success} page object added: ${pageObjectNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(SPECTRE_DOCUMENTATION_LINKS.PageObject)}\n`);
  }
}
