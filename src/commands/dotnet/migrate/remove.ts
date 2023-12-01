// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Command, Flags } from '@oclif/core';
import { DOTNET_CLI_COMMANDS, CLI_STATE, DOTNET_DOCKER_IMAGE_TAG, DOTNET_TOOL_EXPORT_PATH } from '../../../lib/constants';
import { readProjectConfig } from '../../../lib/files';
import { checkProjectValidity, isJsonString, parseAppContainerName } from '../../../lib/utilities';
import { ProjectConfig } from '../../../modules/project';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Remove extends Command {
  // static aliases = ['dotnet migrate up']

  static description = 'revert to previous migration'

  static flags = {
    help: Flags.help({ char: 'h' }),
    appContainer: Flags.string({ char: 'a', description: "This is the name of the container that is running the Dotnet API" }),
    environment: Flags.string({ char: 'e', description: "The target environment for the migrations to be applied. Default is Local. Options are Debug or Release" }),
    configuration: Flags.string({ char: 'c', description: "This can either be Debug or Release. The default is Debug" }),
    prevMigration: Flags.string({ char: 'm', description: "(Experimental) Remove all migration after the specified migration. Starting from the most recent migration" }),
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

  async run(): Promise<void> {
    const { isValid: isValidProject } = checkProjectValidity();

    // block command unless being run within an frontier project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${DOTNET_CLI_COMMANDS.MigrationNew} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const { flags } = await this.parse(Remove);

    const environment = flags.environment || 'Local';
    const configuration = flags.configuration || 'Debug';
    const appContainer = flags.appContainer;
    const prevMigration = flags.prevMigration;

    const projectConfig: ProjectConfig = readProjectConfig();
    const projectName = projectConfig.projectName || "";
    const dotnetVersion = projectConfig.dotnetVersion || DOTNET_DOCKER_IMAGE_TAG;
    const envVariables = [
      `ASPNETCORE_ENVIRONMENT=${environment}`,
      DOTNET_TOOL_EXPORT_PATH
    ]
    .map(e => `-e ${e}`)
    .join(" ");

    const dotnetEfFlags = `--context ${projectName}DbContext\
    --startup-project ${projectName}.Api/${projectName}.Api.csproj\
    --configuration ${configuration}\
    --project ${projectName}.Persistence/${projectName}.Persistence.csproj`
    
    // Get the container name if it not added as flag
    const parsedContainerName = await parseAppContainerName(appContainer, projectName);

    await shell.exec(`docker exec ${parsedContainerName} sh -c "dotnet tool install\
     --global dotnet-ef \
     --version ${dotnetVersion}"`, { silent: true });

    if (prevMigration && prevMigration.trim()) {
      // Update the database up to the migration enttered and remove all migrations that follow from the Database      
      await shell.exec(`docker exec ${envVariables} ${parsedContainerName} sh -c "cd ../ && \
      dotnet ef database update ${prevMigration} ${dotnetEfFlags}"`, { silent: false });
    }

    // Delete the last migration file to project
    await shell.exec(`docker exec ${envVariables} ${parsedContainerName} sh -c "cd ../ && \
    dotnet ef migrations remove ${dotnetEfFlags}"`, { silent: false });
  }
}
