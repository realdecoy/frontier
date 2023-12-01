// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Args, Command, Flags, ux } from '@oclif/core';
import { checkIfFolderExists } from '../../../lib/files';
import {
  checkProjectValidity,
  parseProjectName,
  isJsonString
} from '../../../lib/utilities';
import {
  DOTNET_TEMPLATE_REPO,
  DOTNET_TEMPLATE_TAG,
  DOTNET_TEMPLATE_SHORT_NAME,
  CLI_STATE,
  DOTNET_DOCKER_IMAGE,
  DOTNET_DOCKER_IMAGE_TAG,
  DOTNET_DOCKER_VOLUME,
  DOCKER_RUN_COMMAND,
  DOCKER_APP_DIR,
  FRONTIER_RC,
} from '../../../lib/constants';
import path from 'path';
import os from 'os';


const CUSTOM_ERROR_CODES = new Set([
  'existing-project',
  'existing-folder',
  'project-not-created',
  'docker-required',
]);

export default class CreateProject extends Command {
  // static aliases = ['dotnet create-project'];

  static description = 'Scaffold a new project'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    dotnetVersion: Flags.string({ hidden: false }),
    withSentry: Flags.boolean({ hidden: false }),
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

    const template = DOTNET_TEMPLATE_REPO;
    const templateShortName = DOTNET_TEMPLATE_SHORT_NAME;
    const tag = DOTNET_TEMPLATE_TAG;
    const dotnetImageName = DOTNET_DOCKER_IMAGE;
    const volumeName = `${DOTNET_DOCKER_VOLUME}_${tag}`;
    const dockerRunCommand = DOCKER_RUN_COMMAND;
    const appPath = DOCKER_APP_DIR;
    const isTest = flags.isTest === true;
    const dotnetImageversion = flags.dotnetVersion || DOTNET_DOCKER_IMAGE_TAG;
    const withSentry = (flags.withSentry || true) === true;

    const dockerImage = `${dotnetImageName}:${dotnetImageversion}`;

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

    if (!shell.which('docker')) {
      throw new Error(
        JSON.stringify({
          code: 'docker-required',
          message: 'docker not found',
        }),
      );
    }

    ux.action.type = 'spinner';

    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} creating project ${chalk.whiteBright(projectName)}`);
    }

    const currentDir = process.cwd()
    const appHostMountDir = path.join(currentDir, projectName);
    const certHostMountDir = path.join(os.homedir(), '.aspnet', 'https');
    
    // retrieve project files from template source
    try {
      // Creating a volume that will be used to share the Dotnet template installation 
      await shell.exec(`docker volume create ${volumeName}`, { silent: true });

      // Downloading the template
      const success1 = await shell.exec(`${dockerRunCommand} -v ${volumeName}:/root ${dockerImage} dotnet new install ${template}${tag} --force`, { silent: true });
    
      if (success1.code !== 0) {
        throw new Error(
          JSON.stringify({
            code: 'project-not-created',
            message: `An error occurred while retrieving project files from the template source. \n\n${success1.stderr}`,
          })
        );
      } 

      // Creating the project using the tempplate 
      const success2 = await shell.exec(`${dockerRunCommand} -v ${volumeName}:/root -v ${currentDir}:${appPath} -w ${appPath} ${dockerImage} dotnet new ${templateShortName} --name ${projectName} --sentry ${withSentry}`, { silent: true });
      
      if (success2.code !== 0) {
        throw new Error(
          JSON.stringify({
            code: 'project-not-created',
            message: `An error occurred while creating the project. \n\n${success2.stderr}`,
          })
        );
      }

      // Removing the template volume after the project has been created
      await shell.exec(`docker volume rm ${volumeName}`, { silent: true });

    } catch (error) {
      throw error;
    }

    if (isTest !== true) {
      ux.action.stop();
      ux.action.start(`${CLI_STATE.Info} Setting up project configurations`);
    }

    // initialize .frontierrc config file
    const frontierrcResult = await shell.exec(`cd ${projectName} && echo '{\n\t"type": "dotnet",\n\t"projectName": "${projectName}",\n\t"dotnetVersion": "${dotnetImageversion}"\n}' > ${FRONTIER_RC}`, { silent: true });

    if (frontierrcResult.code !== 0) {
      throw new Error(
        JSON.stringify({
          code: 'frontierrc-initialization-error',
          message: `An error occurred while initializing the ${FRONTIER_RC} config file.\n\n${frontierrcResult.stderr}`,
        }),
      );
    }

    // initialize git in the created project
    const gitResult = await shell.exec(`cd ${projectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: true });

    if (gitResult.code !== 0) {
      throw new Error(
        JSON.stringify({
          code: 'git-initialization-error',
          message: `An error occurred while initializing git in the created project.\n\n${gitResult.stderr}`,
        }),
      );
    }

    if (isTest !== true) {
      ux.action.stop();
    }

    this.log(`certHostMountDir: ${certHostMountDir}`);
    this.log(`appHostMountDir: ${appHostMountDir}`);

    // const certHostMountDir = process.platform === 'win32' ? '%USERPROFILE%\.aspnet\https' : '${HOME}/.aspnet/https'
    const dockerDotnetCommand = `${dockerRunCommand} -v ${appHostMountDir}:/app -v ${certHostMountDir}:/https -w ${appPath} ${dockerImage}`
    
    // Generate and trust SSL certificate for HTTPS
    const devCerts1 = await shell.exec(`${dockerDotnetCommand} dotnet dev-certs https -ep "/https/aspnetapp.pfx" -p Password123`, { silent: true });
    const devCerts2 = await shell.exec(`${dockerDotnetCommand} dotnet dev-certs https --trust`, { silent: true });

    if (devCerts1.code !== 0 || devCerts2.code !== 0) {
      throw new Error(
        JSON.stringify({
          code: 'ssl-certificate-error',
          message: `An error occurred while generating or trusting the SSL certificate.\n\n${devCerts1.stderr} \n\n${devCerts2.stderr}`,
        }),
      );
    }

    this.log(`${CLI_STATE.Success} ${chalk.whiteBright(projectName)} is ready!`);

    // Output final instructions to user
    this.log(`\nNext Steps:\n${chalk.magenta('-')} cd ${chalk.whiteBright(projectName)}\n${chalk.magenta('-')} docker-compose up --build\n${chalk.magenta('-')} ${chalk.yellow('frontier')} migrate new Initial -a ${chalk.whiteBright(projectName)}\n`);
  }
}
