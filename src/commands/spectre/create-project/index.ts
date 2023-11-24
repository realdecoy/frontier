// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
// eslint-disable-next-line unicorn/prefer-module
import shell from 'shelljs';
import { Args, Command, Flags, ux } from '@oclif/core';
import {
  toKebabCase,
  isJsonString,
  parseProjectName,
  checkProjectValidity,
} from '../../../lib/utilities';
import { checkIfFolderExists, copyFolderSync } from '../../../lib/files';
import {
  CLI_STATE,
} from '../../../lib/constants';

const CUSTOM_ERROR_CODES = new Set([
  'existing-project',
  'existing-folder',
  'file-not-changed',
]);

export default class CreateProject extends Command {
  // static aliases = ['spectre create-project'];

  static description = 'Scaffold a new project'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    verbose: Flags.boolean({ hidden: true }),
    // bare: flags.boolean({ hidden: true }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of project to create' }),
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
    const { args, flags } = await this.parse(CreateProject);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const versbose = flags.verbose === true;
    const isTest = flags.isTest === true;
    const template = 'C:/Users/nayja/Desktop/work-projects/spectre/template/project-template';

    const { isValid: isValidProject } = checkProjectValidity();

    if (isValidProject) {
      throw new Error(
        JSON.stringify({
          code: 'existing-project',
          message: `you are already in an existing ${chalk.yellow('spectre')} project`,
        }),
      );
    }

    // retrieve project name
    const projectName = await parseProjectName(args, 'specs');

    // convert project name to kebab case
    const kebabProjectName = toKebabCase(projectName);

    // verify that project folder doesnt already exist
    checkIfFolderExists(kebabProjectName);

    this.log(`${CLI_STATE.Info} creating spectre project ${chalk.whiteBright(kebabProjectName)}`);

    // retrieve project files from template source
    await copyFolderSync(template, kebabProjectName); // TODO: replace with git clone from remote repo

    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} Initializing Git`);
    }

    // remove git folder reference to base project
    await shell.exec(`npm install -g rimraf && npx rimraf ${kebabProjectName}/.git`, { silent: !versbose });

    // initialize git in the created project
    await shell.exec(`cd ${kebabProjectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: !versbose });

    if (isTest !== true) {
      ux.action.stop();
    }

    // Installing dependencies
    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} Installing dependencies`);
    }

    await shell.exec(`cd ${kebabProjectName} && npm install --legacy-peer-deps`, { silent: !versbose });

    if (isTest !== true) {
      ux.action.stop();
    }

    this.log(`\n${CLI_STATE.Success} ${chalk.whiteBright(kebabProjectName)} is ready!`);

    // Output final instructions to user
    this.log(`\n${chalk.magenta('Next Steps:')}\n${chalk.magenta('-')} cd ${chalk.whiteBright(kebabProjectName)}\n${chalk.magenta('-')} npm run test`);
  }
}
