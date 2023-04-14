// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Command, Flags } from '@oclif/core';
import { DOTNET_CLI_COMMANDS, CLI_STATE } from '../../../lib/constants';
import { readProjectConfig } from '../../../lib/files';
import { checkProjectValidity, isJsonString } from '../../../lib/utilities';
import { ProjectConfig } from '../../../modules/project';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Up extends Command {
  // static aliases = ['dotnet migrate up']

  static description = 'apply all migrations'

  static flags = {
    help: Flags.help({ char: 'h' }),
  }

  static args = {}

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
    const { isValid: isValidProject } = checkProjectValidity();
    const environment = 'Local';
    const configuration = 'Debug';
    // block command unless being run within an frontier project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${DOTNET_CLI_COMMANDS.MigrationNew} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const projectConfig: ProjectConfig = readProjectConfig();
    const projectName = projectConfig.projectName;

    // pick environment
    // environment = await parseEnvironment(args, 'MyApiProject');

    // pick configuration
    // configuration = await parseConfiguration(args, 'MyApiProject');

    await shell.exec('dotnet tool install --global dotnet-ef', { silent: true });
    // add a new migration to project
    await shell.exec(`export ASPNETCORE_ENVIRONMENT=${environment} &&
    dotnet ef database update --context ${projectName}DbContext\
    --startup-project src/${projectName}.Api/${projectName}.Api.csproj\
    --configuration ${configuration}\
    --project src/${projectName}.Persistence/${projectName}.Persistence.csproj`, { silent: false });
  }
}
