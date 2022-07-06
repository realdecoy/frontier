import shell from 'shelljs';
import chalk from 'chalk';
import { Command, flags } from '@oclif/command';
import Buefy from '../plugin/buefy';
import Localization from '../plugin/localization';
import Vuetify from '../plugin/vuetify';
import { toKebabCase } from '@rdfrontier/stdlib';
import { parseProjectName, checkProjectValidity, parseProjectPresets } from '../../../utils/utilities';
import { replaceInFiles, checkIfFolderExists } from '../../../utils/files';
import {
  TEMPLATE_REPO,
  DESIGN_TEMPLATE_REPO,
  DESIGN_TEMPLATE_FOLDER,
  TEMPLATE_TAG,
  TEMPLATE_PROJECT_NAME_REGEX,
  TEMPLATE_REPLACEMENT_FILES,
  CLI_STATE,
  PLUGIN_PRESET_LIST,
} from '../../../utils/constants';
import catchFunction from '../../../functions/catch';
import { existingProject, fileNotChanged } from '@rdfrontier/plugin-shared';

const CUSTOM_ERROR_CODES = [
  'existing-project',
  'existing-folder',
  'file-not-changed',
];

/**
 * Class representing a create project object.
 * @extends Command
 */
export default class CreateProject extends Command {
  static description = 'create a new rdvue project'

  static flags = {
    help: flags.help({ char: 'h' }),
    skipPresets: flags.boolean({ hidden: true }),
    withBuefy: flags.boolean({ hidden: true }),
    withLocalization: flags.boolean({ hidden: true }),
    withVuetify: flags.boolean({ hidden: true }),
    withDesignSystem: flags.boolean({ hidden: true }),
  }

  static args = [
    { name: 'name', description: 'name of created project' },
    { name: 'preset', description: 'name of plugin preset' },
  ]

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  async run(): Promise<void> {
    const { args, flags } = this.parse(CreateProject);
    const template: string = TEMPLATE_REPO;
    const designTemplate: string = DESIGN_TEMPLATE_REPO;
    const designTemplateFolder: string = DESIGN_TEMPLATE_FOLDER;
    const tag: string = TEMPLATE_TAG;
    const replaceRegex = TEMPLATE_PROJECT_NAME_REGEX;
    const skipPresetsStep = flags.skipPresets === true;
    const withBuefy = flags.withBuefy === true;
    const withVuetify = flags.withVuetify === true;
    const withLocalization = flags.withLocalization === true;
    const withDesignSystem = flags.withDesignSystem === true;

    let filesToReplace = TEMPLATE_REPLACEMENT_FILES;
    let projectName: string;
    let presetName: string = '';
    const { isValid: isValidProject } = checkProjectValidity();
    // block command if being run within an rdvue project
    if (isValidProject) {
      existingProject("rdvue");
    }

    // retrieve project name
    projectName = await parseProjectName(args);
    // retrieve project preset
    // on skip preset flag set presetName to skip presets
    presetName = skipPresetsStep ? PLUGIN_PRESET_LIST[2] : await parseProjectPresets(args);
    // convert project name to kebab case
    projectName = toKebabCase(projectName);
    // verify that project folder doesnt already exist
    checkIfFolderExists(projectName);

    // update files to be replaced with project name reference
    filesToReplace = filesToReplace.map(p => `${projectName}/${p}`);

    this.log(`${CLI_STATE.Info} creating project ${chalk.whiteBright(projectName)}`);

    // retrieve project files from template source
    await shell.exec(`git clone ${template} --depth 1 --branch ${tag} ${projectName}`, { silent: true });
    // remove git folder reference to base project
    await shell.exec(`npx rimraf ${projectName}/.git`);
    // find and replace project name references
    const success = await replaceInFiles(filesToReplace, replaceRegex, `${projectName}`);

    const presetIndex = PLUGIN_PRESET_LIST.indexOf(presetName);
    const shouldInstallBuefy = presetIndex === 0 || withBuefy === true;
    const shouldInstallVuetify = presetIndex === 1 || withVuetify === true;
    const shouldInstallLocalization = presetIndex === 0 || presetIndex === 1 || withLocalization === true;
    const shouldInstallDesignSystem = withDesignSystem === true;

    if (success === false) {
      fileNotChanged();
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

    this.log(`${CLI_STATE.Success} ${chalk.whiteBright(projectName)} is ready!`);

    // Output final instructions to user
    this.log(`\nNext Steps:\n${chalk.magenta('-')} cd ${chalk.whiteBright(projectName)}\n${chalk.magenta('-')} npm install\n${chalk.magenta('-')} npm run serve`);
  }
}
