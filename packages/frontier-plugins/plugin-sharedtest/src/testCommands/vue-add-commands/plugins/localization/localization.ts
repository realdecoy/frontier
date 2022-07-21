import { Command, flags } from '@oclif/command';
import path from 'path';
import chalk from 'chalk';
import { Files } from 'modules';
import { isJsonString } from '@rdfrontier/stdlib';
import { copyFiles, parseDynamicObjects, parseModuleConfig } from 'utils/files';
import { checkProjectValidity } from 'utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DYNAMIC_OBJECTS } from 'utils/constants';
import { injectImportsIntoMain, injectModulesIntoMain } from 'utils/plugins';
import { installDepenedencies } from 'functions/vue-functions/installDependencies';
import catchFunction from 'functions/vue-functions/catch';
import { invalidProject } from '@rdfrontier/plugin-shared';

const TEMPLATE_FOLDERS = ['localization'];
const TEMPLATE_MIN_VERSION_SUPPORTED = 2;
const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
];

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
    return catchFunction(error);
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

    await installDepenedencies("localization", skipInstallStep, projectName, preInstallCommand, devDependencies, dependencies, this.id?.split(':')[1])
    

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
