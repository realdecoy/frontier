// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Args, Command, Flags, ux } from '@oclif/core';
import { checkIfFolderExists } from '../../../lib/files';
import { checkProjectValidity, parseProjectName, isJsonString } from '../../../lib/utilities';
import {
  DOTNET_TEMPLATE_REPO,
  DOTNET_TEMPLATE_TAG,
  DOTNET_TEMPLATE_SHORT_NAME,
  CLI_STATE,
} from '../../../lib/constants';

const CUSTOM_ERROR_CODES = new Set([
  'existing-project',
  'existing-folder',
  'project-not-created',
  'dotnet-sdk-required',
]);

export default class CreateProject extends Command {
  // static aliases = ['dotnet create-project'];

  static description = 'Scaffold a new project'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
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
    const { flags, args } = await this.parse(CreateProject);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    const template: string = DOTNET_TEMPLATE_REPO;
    const templateShortName: string = DOTNET_TEMPLATE_SHORT_NAME;
    const tag: string = DOTNET_TEMPLATE_TAG;
    const isTest = flags.isTest === true;

    let projectName = '';
    const { isValid: isValidProject } = checkProjectValidity();
    // block command if being run within an frontier project
    if (isValidProject) {
      throw new Error(
        JSON.stringify({
          code: 'existing-project',
          message: `you are already in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    // retrieve project name
    projectName = await parseProjectName(args, 'MyApiProject');
    // verify that project folder doesnt already exist
    checkIfFolderExists(projectName);

    if (!shell.which('dotnet')) {
      throw new Error(
        JSON.stringify({
          code: 'dotnet-sdk-required',
          message: 'dotnet not found',
        }),
      );
    }

    ux.action.type = 'spinner';
    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} creating project ${chalk.whiteBright(projectName)}`);
    }

    // retrieve project files from template source
    const success1 = await shell.exec(`dotnet new --install ${template}${tag}`, { silent: true });
    const success2 = await shell.exec(`dotnet new ${templateShortName} --name ${projectName} --sentry true`, { silent: true });

    if (success1 === false || success2 === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-not-created',
          message: 'an error occured',
        }),
      );
    }

    // initialize .frontierrc config file
    await shell.exec(`echo '{\n\t"type": "dotnet",\n\t"projectName": "${projectName}"\n}' > ./${projectName}/.frontierrc`, { silent: false });

    // initialize git in the created project
    await shell.exec(`cd ${projectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: true });

    if (isTest !== true) {
      ux.action.stop();
    }

    this.log(`${CLI_STATE.Success} ${chalk.whiteBright(projectName)} is ready!`);

    // Output final instructions to user
    this.log(`\nNext Steps:\n${chalk.magenta('-')} cd ${chalk.whiteBright(projectName)}\n${chalk.magenta('-')} docker-compose up --build`);
  }
}
