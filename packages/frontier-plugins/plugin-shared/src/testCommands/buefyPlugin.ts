import shell from 'shelljs';
import cli from 'cli-ux';
const util = require('util');
const exec = util.promisify(shell.exec);
import { Command, flags } from '@oclif/command';
import path from 'path';
import { Files } from '../modules';
import { copyFiles, inject, parseModuleConfig, updateDynamicImportsAndExports } from '../utils/files';
import { checkProjectValidity, isJsonString } from '../utils/utilities';
import { CLI_COMMANDS, CLI_STATE } from '../utils/constants';
import { injectImportsIntoMain } from '../utils/plugins';
import { Route } from '../modules/manifest';

import { validityFailed } from '../functions/addelement'
import catchFunction from '../functions/catch';
import { addPluginFunction } from '../functions/addplugin';

const TEMPLATE_FOLDERS = ['buefy'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
];

export default class Buefy extends Command {
  static description = 'lightweigth UI components for Vuejs'

  static flags = {
    help: flags.help({ char: 'h' }),
    forceProject: flags.string({ hidden: true }),
    skipInstall: flags.boolean({ hidden: true }),
  }

  static args = []

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  async run(): Promise<void> {
    const { flags } = this.parse(Buefy);
    const projectName = flags.forceProject;
    const skipInstallStep = flags.skipInstall === true;
    const hasProjectName = projectName !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const projectValidity = checkProjectValidity();
    const { isValid: isValidProject } = projectValidity;
    let { projectRoot } = projectValidity;

    // block command unless being run within an rdvue project
    if (isValidProject === false && !hasProjectName) {
        validityFailed(CLI_COMMANDS.PluginBuefy);

    } else if (hasProjectName) {
        const dir = path.join(process.cwd(), projectName ?? '');
        projectRoot = dir.trim();
    }

    const folderList = TEMPLATE_FOLDERS;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);
    const config = configs[0];
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');

    if (skipInstallStep === false) {
      try {
        // install dependencies
        cli.action.start(`${CLI_STATE.Info} installing buefy dependencies`);
        await exec(`${preInstallCommand} npm install --save ${dependencies}`, { silent: true });
        cli.action.stop();
      } catch (error) {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} buefy dependencies failed to install`,
          }),
        );
      }
    } else {
      cli.action.start(`${CLI_STATE.Info} adding buefy dependencies`);
      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });
      cli.action.stop();
    }

    addPluginFunction(TEMPLATE_FOLDERS, TEMPLATE_MIN_VERSION_SUPPORTED, projectRoot)

    if (skipInstallStep === false) {
      this.log(`${CLI_STATE.Success} plugin added: ${this.id?.split(':')[1]}`);
    }
  }
}
