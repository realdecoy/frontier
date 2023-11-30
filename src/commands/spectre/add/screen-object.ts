import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import {
  toKebabCase,
  isJsonString,
  checkSpectreProjectValidity,
  parseScreenObjectName,
  toPascalCase,
} from '../../../lib/utilities.js';
import {
  CLI_STATE,
  EMPTY_SCREEN_OBJECT_DATA,
  SPECTRE_CLI_COMMANDS,
  SPECTRE_DOCUMENTATION_LINKS,
} from '../../../lib/constants.js';
import { verifyFolderExists, writeFile } from '../../../lib/files.js';
import { generate } from '@rd-page-object-generator/core';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class ScreenObject extends Command {
  // static aliases = ['spectre add screen-object'];

  static description = 'add a new screen object file.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    type: Flags.string({ hidden: true, char: 't', default: 'class' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new screen object' }),
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
    verifyFolderExists(
      './src/screen_objects',
      'missing-screen-objects-folder',
      'screen_objects/ folder not found, are you sure you are in a spectre mobile project?',
    );
    // block command unless being run within a spectre project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${SPECTRE_CLI_COMMANDS.AddScreenObject} command must be run in an existing ${chalk.yellow('spectre')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(ScreenObject);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    // retrieve screen object name
    const screenObjectName = await parseScreenObjectName(args);
    // parse kebab and pascal case of screenObjectName
    const screenObjectNameKebab = toKebabCase(screenObjectName);
    const screenObjectNamePascal = toPascalCase(screenObjectName);

    this.log('Generating screen object...');

    const screenObjectData = EMPTY_SCREEN_OBJECT_DATA;
    let screenObject = await generate(
      screenObjectData,
      {
        importsSnippet: 'import AppScreen from "./app-screen";',
        xpath: false,
        indentSize: 1,
        spacing: 'Tabs',
        title: screenObjectNamePascal,
        methodsOnly: false,
        extendsSnippet: 'BaseScreen',
        elementTypeParam: false,
        selectorFuncSnippet: '$',
      },
    );
    screenObject = screenObject
      .split('\n')
      .filter(line => !/@XPath|@CSSSelector/.test(line))
      .join('\n');
    writeFile(`./src/screen_objects/${screenObjectNameKebab}.screen.ts`, screenObject);

    this.log(`${CLI_STATE.Success} screen object added: ${screenObjectNameKebab}`);
    this.log(`\n  Visit the documentation screen for more info:\n  ${chalk.yellow(SPECTRE_DOCUMENTATION_LINKS.ScreenObject)}\n`);
  }
}
