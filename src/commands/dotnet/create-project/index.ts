// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Args, Command, Flags, ux } from '@oclif/core';
import { checkIfFolderExists } from '../../../lib/files';
import { checkProjectValidity, parseProjectName, isJsonString, toPascalCase } from '../../../lib/utilities';
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
    help: Flags.help({ char: 'h' }),
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

    if (!hasCustomErrorCode) {
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
    const { flags, args } = await this.parse(CreateProject);
    const template: string = DOTNET_TEMPLATE_REPO;
    const templateShortName: string = DOTNET_TEMPLATE_SHORT_NAME;
    const tag: string = DOTNET_TEMPLATE_TAG;
    const isTest = flags.isTest === true;

    let projectName: string;
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
    // retrieve project preset
    // convert project name to kebab case
    projectName = toPascalCase(projectName);
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
    const success1 = await shell.exec(`dotnet new --install ${template}${tag}`);
    const success2 = await shell.exec(`dotnet new ${templateShortName} --name ${projectName}`);

    if (success1 === false || success2 === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-not-created',
          message: 'an error occured',
        }),
      );
    }

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