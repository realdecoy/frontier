/* eslint-disable max-lines */
// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
// eslint-disable-next-line unicorn/prefer-module
import shell from 'shelljs';
import { Args, Command, Flags, ux } from '@oclif/core';
import Buefy from '../plugin/buefy.js';
import Vuetify from '../plugin/vuetify.js';
import Localization from '../plugin/localization.js';
import { replaceInFiles, checkIfFolderExists } from '../../../lib/files.js';
import { checkProjectValidity, parseProjectName, parseProjectPresets, isJsonString, toKebabCase } from '../../../lib/utilities.js';
import {
  VUE_TEMPLATE_REPO,
  DESIGN_TEMPLATE_REPO,
  DESIGN_TEMPLATE_FOLDER,
  VUE_TEMPLATE_TAG,
  TEMPLATE_PROJECT_NAME_REGEX,
  VUE_TEMPLATE_REPLACEMENT_FILES,
  CLI_STATE,
  VUE_PLUGIN_PRESET_LIST,
} from '../../../lib/constants.js';

const CUSTOM_ERROR_CODES = new Set([
  'existing-project',
  'existing-folder',
  'file-not-changed',
]);

export default class CreateProject extends Command {
  // static aliases = ['vue create-project'];

  static description = 'Scaffold a new project'

  static flags = {
    help: Flags.boolean({ hidden: false }),
    isTest: Flags.boolean({ hidden: true }),
    skipPresets: Flags.boolean({ hidden: true }),
    withBuefy: Flags.boolean({ hidden: true }),
    withLocalization: Flags.boolean({ hidden: true }),
    withVuetify: Flags.boolean({ hidden: true }),
    withDesignSystem: Flags.boolean({ hidden: true }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of project to create' }),
    preset: Args.string({ name: 'preset', description: 'name of plugin preset', hidden: true }),
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

    const template: string = VUE_TEMPLATE_REPO;
    const designTemplate: string = DESIGN_TEMPLATE_REPO;
    const designTemplateFolder: string = DESIGN_TEMPLATE_FOLDER;
    const tag: string = VUE_TEMPLATE_TAG;
    const replaceRegex = TEMPLATE_PROJECT_NAME_REGEX;
    const isTest = flags.isTest === true;
    const skipPresetsStep = flags.skipPresets === true;
    const withBuefy = flags.withBuefy === true;
    const withVuetify = flags.withVuetify === true;
    const withLocalization = flags.withLocalization === true;
    const withDesignSystem = flags.withDesignSystem === true;

    let filesToReplace = VUE_TEMPLATE_REPLACEMENT_FILES;
    let projectName: string;
    let presetName = '';
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
    projectName = await parseProjectName(args);
    // retrieve project preset
    // on skip preset flag set presetName to skip presets
    presetName = skipPresetsStep ? VUE_PLUGIN_PRESET_LIST[2] : await parseProjectPresets(args);
    // convert project name to kebab case
    projectName = toKebabCase(projectName);
    // verify that project folder doesnt already exist
    checkIfFolderExists(projectName);

    // update files to be replaced with project name reference
    filesToReplace = filesToReplace.map(p => `${projectName}/${p}`);

    ux.action.type = 'spinner';
    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} creating project ${chalk.whiteBright(projectName)}`);
    }

    // retrieve project files from template source
    await shell.exec(`git clone ${template} --depth 1 --branch ${tag} ${projectName}`, { silent: true });
    // remove git folder reference to base project
    await shell.exec(`npx rimraf ${projectName}/.git`);
    // find and replace project name references
    const success = await replaceInFiles(filesToReplace, replaceRegex, `${projectName}`);

    const presetIndex = VUE_PLUGIN_PRESET_LIST.indexOf(presetName);
    const shouldInstallBuefy = presetIndex === 0 || withBuefy === true;
    const shouldInstallVuetify = presetIndex === 1 || withVuetify === true;
    const shouldInstallLocalization = presetIndex === 0 || presetIndex === 1 || withLocalization === true;
    const shouldInstallDesignSystem = withDesignSystem === true;

    if (success === false) {
      throw new Error(
        JSON.stringify({
          code: 'file-not-changed',
          message: 'updating your project failed',
        }),
      );
    } else {
      if (shouldInstallBuefy === true) { // buefy
        await Buefy.run(['--forceProject', projectName, '--skipInstall']);
      }

      if (shouldInstallVuetify) { // Vuetify
        await Vuetify.run(['--forceProject', projectName, '--skipInstall']);
      }

      if (shouldInstallLocalization === true) { // localization
        await Localization.run(['--forceProject', projectName, '--skipInstall']);
      }
    }

    if (shouldInstallDesignSystem === true) {
      // retrieve project files from template source
      await shell.exec(`git clone ${designTemplate} --depth 1 --branch ${tag} ${projectName}/${designTemplateFolder}`, { silent: true });
      // remove git folder reference to base project
      await shell.exec(`npx rimraf ${projectName}/${designTemplateFolder}/.git`);
    }

    // initialize git in the created project
    await shell.exec(`cd ${projectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: true });

    if (isTest !== true) {
      ux.action.stop();
    }

    this.log(`${CLI_STATE.Success} ${chalk.whiteBright(projectName)} is ready!`);

    // Output final instructions to user
    this.log(`\nNext Steps:\n${chalk.magenta('-')} cd ${chalk.whiteBright(projectName)}\n${chalk.magenta('-')} npm install --legacy-peer-deps\n${chalk.magenta('-')} npm run serve`);
  }
}
