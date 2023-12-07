// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Args, Command, Flags } from '@oclif/core';
import { DOTNET_CLI_COMMANDS, CLI_STATE, DOTNET_TOOL_EXPORT_PATH, DOTNET_DOCKER_IMAGE_TAG } from '../../../lib/constants';
import { readProjectConfig } from '../../../lib/files';
import { checkProjectValidity, isJsonString, parseAppContainerName, parseMigrations } from '../../../lib/utilities';
import { ProjectConfig } from '../../../modules/project';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Down extends Command {
  // static aliases = ['dotnet migrate up']

  static description = 'revert to previous migration'

  static flags = {
    help: Flags.help({ char: 'h' }),
    appContainer: Flags.string({ char: 'a', description: "This is the name of the container that is running the Dotnet API" }),
    environment: Flags.string({ char: 'e', description: "The target environment for the migrations to be applied. Default is Local. Options are Debug or Release" }),
    configuration: Flags.string({ char: 'c', description: "This can either be Debug or Release. The default is Debug" }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of the previous migration' }),
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

  async run(): Promise<void> {

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { args, flags } = await this.parse(Down);
    const environment = flags.environment || 'Local';
    const configuration = flags.configuration || 'Debug';
    const appContainer = flags.appContainer;

    let migrationName = '';
    let parsedContainerName = '';
    
    // block command unless being run within an frontier project
    const { isValid: isValidProject } = checkProjectValidity();
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${DOTNET_CLI_COMMANDS.MigrationNew} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const projectConfig: ProjectConfig = readProjectConfig();
    const projectName = projectConfig.projectName || "";
    const dotnetVersion = projectConfig.dotnetVersion || DOTNET_DOCKER_IMAGE_TAG;
    const envVariables = [`ASPNETCORE_ENVIRONMENT=${environment}`]
      .map((e) => `-e ${e}`)
      .join(" ");
    
    const dotnetEfFlags = `--context ${projectName}DbContext\
    --startup-project ${projectName}.Api/${projectName}.Api.csproj \
    --configuration ${configuration} \
    --project ${projectName}.Persistence/${projectName}.Persistence.csproj`;
    
    // pick previous migration
    migrationName = await parseMigrations(args, projectName as string);
    parsedContainerName = await parseAppContainerName(appContainer, projectName);

    await shell.exec(`docker exec ${parsedContainerName} /bin/sh -c "dotnet tool install \
    --global dotnet-ef --version ${dotnetVersion}"`, { silent: true });

    await shell.exec(`docker exec ${envVariables} ${parsedContainerName} /bin/sh -c "cd ../ && \
    export ${DOTNET_TOOL_EXPORT_PATH} && \
    dotnet ef database update ${migrationName} ${dotnetEfFlags}"`, { silent: false });
  }
}
