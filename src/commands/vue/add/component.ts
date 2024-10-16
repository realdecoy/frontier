// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import path from 'node:path';
import { Args, Command, Flags } from '@oclif/core';
import { Files } from '../../../modules';
import { VUE_CLI_COMMANDS, CLI_STATE, VUE_DOCUMENTATION_LINKS, UI_COMPONENTS_ROOT, UI_COMPONENT_CONFIG_FILENAME, COMPONENTS_LIB_ROOT } from '../../../lib/constants';
import { copyFiles, enumerateDirectories, fileExists, parseVueModuleConfig, readAndUpdateFeatureFiles, readConfigFile, readFilesFromDirectory, replaceTargetFileNames, writeFile } from '../../../lib/files';
import { checkProjectValidity, parseComponentName, isJsonString, toKebabCase, toPascalCase, promptUiComponentChoice, compareAndUpdateDependencies } from '../../../lib/utilities';

const TEMPLATE_FOLDERS = ['component'];
const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Component extends Command {
  // static aliases = ['vue add component']

  static description = 'add a new Component module.'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    ui: Flags.boolean({ hidden: false }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of new component' }),
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

  async handleUi(args: (string | undefined)[], flags: {
    ui: boolean;
  }): Promise<boolean> {
    if (flags.ui) {
      const components = enumerateDirectories(UI_COMPONENTS_ROOT);
      const component = await promptUiComponentChoice(args, components);
      const files = readFilesFromDirectory(path.join(UI_COMPONENTS_ROOT, component)).filter((file: string) => file !== UI_COMPONENT_CONFIG_FILENAME);
      copyFiles(path.join(UI_COMPONENTS_ROOT, component), path.join(process.cwd(), 'src', 'components', component), files);

      let { dependencies: packagesToInstall } = readConfigFile(path.join(UI_COMPONENTS_ROOT, component, UI_COMPONENT_CONFIG_FILENAME));
      const packageJson = readConfigFile(path.join(process.cwd(), 'package.json'));
      const { dependencies: installedPackages } = packageJson;
      // install packages if they are not installed or are outdated
      this.log(`${CLI_STATE.Info} Updating dependency tree`);

      if (!fileExists(path.join(UI_COMPONENTS_ROOT, component, 'lib'))) {
        const libFiles = readFilesFromDirectory(path.join(COMPONENTS_LIB_ROOT)).filter((file: string) => file !== UI_COMPONENT_CONFIG_FILENAME);
        copyFiles(path.join(COMPONENTS_LIB_ROOT), path.join(process.cwd(), 'src', 'components', 'lib'), libFiles);
        const { dependencies: libDependencies } = readConfigFile(path.join(COMPONENTS_LIB_ROOT, UI_COMPONENT_CONFIG_FILENAME));
        packagesToInstall = compareAndUpdateDependencies(libDependencies, packagesToInstall);
      }

      packageJson.dependencies = compareAndUpdateDependencies(packagesToInstall, installedPackages);
      await Promise.all([
        writeFile(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJson, null, 2)),
        shell.exec('npm install --legacy-peer-deps'),
      ]);

      return true;
    }

    return false;
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an frontier project
    if (isValidProject === false) {
      throw new Error(
        JSON.stringify({
          code: 'project-invalid',
          message: `${VUE_CLI_COMMANDS.AddComponent} command must be run in an existing ${chalk.yellow('frontier')} project`,
        }),
      );
    }

    const { args, flags } = await this.parse(Component);
    const folderList = TEMPLATE_FOLDERS;
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);
    if (await this.handleUi(commandArgs, flags)) {
      return;
    }

    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseVueModuleConfig(folderList, projectRoot);

    // retrieve component name
    const componentName = await parseComponentName(args);
    // parse kebab and pascal case of componentName
    const componentNameKebab = toKebabCase(componentName);
    const componentNamePascal = toPascalCase(componentName);

    // eslint-disable-next-line unicorn/no-array-for-each
    configs.forEach(async config => {
      const files: Array<string | Files> = config.manifest.files;
      // replace file names in config with kebab case equivalent
      replaceTargetFileNames(files, componentNameKebab);
      sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
      installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, componentNameKebab);
      // copy and update files for component being added
      await copyFiles(sourceDirectory, installDirectory, files);
      await readAndUpdateFeatureFiles(installDirectory, files, componentNameKebab, componentNamePascal);
    });

    this.log(`${CLI_STATE.Success} component added: ${componentNameKebab}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(VUE_DOCUMENTATION_LINKS.Component)}\n`);
  }
}
