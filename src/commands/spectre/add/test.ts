import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import {
  toKebabCase,
  isJsonString,
  checkSpectreProjectValidity,
  parseTestName,
} from '../../../lib/utilities.js';
import {
  CLI_STATE,
  SPECTRE_CLI_COMMANDS,
  SPECTRE_DOCUMENTATION_LINKS,
  TEMPLATE_TEST_NAME_REGEX,
} from '../../../lib/constants.js';
import { readFile, verifyFolderExists, writeFile } from '../../../lib/files.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Test extends Command {
  // static aliases = ['spectre add test'];

  static description = 'add a new test file.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    type: Flags.string({ hidden: true, char: 't', default: 'class' }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new test' }),
    URL: Args.string({ name: 'URL', description: 'URL of new test', required: false }),
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
      './test/specs',
      'missing-tests-folder',
      'specs/ folder not found, are you sure you are in a spectre project?',
    );
    // block command unless being run within a spectre project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${SPECTRE_CLI_COMMANDS.AddTest} command must be run in an existing ${chalk.yellow('spectre')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(Test);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    // retrieve test name
    const testName = await parseTestName(args);
    // parse kebab and pascal case of testName
    const testNameKebab = toKebabCase(testName);
    const template = '../../../../../template/resources/test.spec.ts';

    let test = readFile(path.join(fileURLToPath(import.meta.url), template));
    test = test.replace(TEMPLATE_TEST_NAME_REGEX, testName);
    writeFile(`./test/specs/${testNameKebab}.spec.ts`, test);

    this.log(`${CLI_STATE.Success} test added: ${testNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(SPECTRE_DOCUMENTATION_LINKS.Test)}\n`);
  }
}
