import shell from 'shelljs';
import cli from 'cli-ux';
const util = require('util');
const exec = util.promisify(shell.exec);
import { Command, flags } from '@oclif/command';
import path from 'path';
import { Files } from 'modules';
import { copyFiles, parseDynamicObjects, parseModuleConfig } from '../../../utils/files';
import { checkProjectValidity } from '../../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DYNAMIC_OBJECTS } from '../../../utils/constants';
import { injectImportsIntoMain, injectModulesIntoMain } from '../../../utils/plugins';
import { invalidProject } from '@rdfrontier/plugin-shared';
import { catchError } from '@rdfrontier/plugin-shared';;

const TEMPLATE_FOLDERS = ['localization'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;

/**
 * Class representing localization plugin.
 * @extends Command
 */
export default class Localization extends Command {
  static description = 'adds i18bn localization'

  static flags = {
    help: flags.help({ char: 'h' }),
    forceProject: flags.string({ hidden: true }),
    skipInstall: flags.boolean({ hidden: true }),
  }

  static args = []

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchError(error, CLI_STATE);
  }

  async run(): Promise<void> {
    const { flags } = this.parse(Localization);
    const projectName = flags.forceProject;
    const skipInstallStep = flags.skipInstall === true;
    const hasProjectName = projectName !== undefined;
    const preInstallCommand = hasProjectName ? `cd ${projectName} &&` : '';

    const validityResponse = checkProjectValidity();
    const { isValid: isValidProject } = validityResponse;
    let { projectRoot } = validityResponse;
    // block command unless being run within an rdvue project
    if (isValidProject === false && !hasProjectName) {
      invalidProject(CLI_COMMANDS.PluginLocalization, "rdvue");
    } else if (hasProjectName) {
      const dir = path.join(process.cwd(), projectName ?? '');
      projectRoot = dir.trim();
    }

    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string = '';
    let installDirectory: string = '';

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);
    const config = configs[0];
    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');
    const devDependencies = config.manifest.packages.devDependencies.toString()
      .split(',')
      .join(' ');

    if (skipInstallStep === false) {
      try {
        // // install dev dependencies
        cli.action.start(`${CLI_STATE.Info} installing localization dev dependencies`);
        await exec(`${preInstallCommand} npm install --save-dev ${devDependencies}`, { silent: true });
        cli.action.stop();

        // // install dependencies
        cli.action.start(`${CLI_STATE.Info} installing localization dependencies`);
        await exec(`${preInstallCommand} npm install --save ${dependencies}`, { silent: true });
        cli.action.stop();
      } catch (error) {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${this.id?.split(':')[1]} localization dependencies failed to install`,
          }),
        );
      }
    } else {
      cli.action.start(`${CLI_STATE.Info} adding localization dependencies`);
      await exec(`cd ${projectName} && npx add-dependencies ${devDependencies} --save-dev`, { silent: true });
      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });
      cli.action.stop();
    }

    sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
    installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory);

    // copy files for plugin being added
    await copyFiles(sourceDirectory, installDirectory, files);
    await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.routes, null, 1), DYNAMIC_OBJECTS.Routes);
    await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.vueOptions, null, 1), DYNAMIC_OBJECTS.Options, true);
    
    if (config.manifest.version >= TEMPLATE_MIN_VERSION_SUPPORTED) {
      const { imports: mainImports, modules: mainModules } = config.manifest.main;
      injectImportsIntoMain(projectRoot, mainImports);
      try {
        injectModulesIntoMain(projectRoot, mainModules);
      } catch (error) {
        this.error(error as any);
      }
    } else {
      // FP-414: backwards compatibility
      await parseDynamicObjects(projectRoot, JSON.stringify(config.manifest.modules, null, 1), DYNAMIC_OBJECTS.Modules, true);
    }

    if (skipInstallStep === false) {
      this.log(`${CLI_STATE.Success} plugin added: ${this.id?.split(':')[1]}`);
    }
  }
}
