// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
// eslint-disable-next-line unicorn/prefer-module
const shell = require('shelljs');
import { Args, Command, Flags, ux } from '@oclif/core';
import {
  toKebabCase,
  toPascalCase,
  isJsonString,
  parseProjectName,
  checkProjectValidity,
  parseBundleIdentifier,
} from '../../../lib/utilities';
import { replaceInFiles, checkIfFolderExists } from '../../../lib/files';
import {
  MOBILE_TEMPLATE_TAG,
  TEMPLATE_PROJECT_NAME_REGEX,
  CLI_STATE,
  MOBILE_TEMPLATE_REPLACEMENT_FILES,
  MOBILE_TEMPLATE_REPO,
  MOBILE_TEMPLATE_CI_CD_REPLACEMENT_FILES,
} from '../../../lib/constants';

const CUSTOM_ERROR_CODES = new Set([
  'existing-project',
  'existing-folder',
  'file-not-changed',
]);

export default class CreateProject extends Command {
  static aliases = ['mobile create-project'];

  static description = 'create a new mobile project'

  static flags = {
    help: Flags.help({ char: 'h' }),
    isTest: Flags.boolean({ hidden: true }),
    verbose: Flags.boolean({ hidden: true }),
    // bare: flags.boolean({ hidden: true }),
  }

  static args = {
    name: Args.string({ name: 'name', description: 'name of project to create' }),
    preset: Args.string({ name: 'bundleIdenifier', description: 'name of the unique identifier that will used for deployment to the App & Google play Store (eg. com.company.app)' }),
  }

  // override Command class error handler
  catch(error: Error): Promise<any> {
    const errorMessage = error.message;
    const isValidJSON = isJsonString(errorMessage);
    const parsedError = isValidJSON ? JSON.parse(errorMessage) : {};
    const customErrorCode = parsedError.code;
    const customErrorMessage = parsedError.message;
    const hasCustomErrorCode = customErrorCode !== undefined;

    if (!hasCustomErrorCode) {
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
    const { args, flags } = await this.parse(CreateProject);
    const versbose = flags.verbose === true;
    const isTest = flags.isTest === true;
    const template: string = MOBILE_TEMPLATE_REPO;
    const tag: string = MOBILE_TEMPLATE_TAG;
    const replaceRegex = TEMPLATE_PROJECT_NAME_REGEX;
    let filesToReplace = MOBILE_TEMPLATE_REPLACEMENT_FILES;

    const { isValid: isValidProject } = checkProjectValidity();

    if (isValidProject) {
      throw new Error(
        JSON.stringify({
          code: 'existing-project',
          message: `you are already in an existing ${chalk.yellow('mobile')} project`,
        }),
      );
    }

    // retrieve project name
    const projectName = await parseProjectName(args);
    const bundleIdenifier = await parseBundleIdentifier(args);

    // convert project name to kebab case
    const kebabProjectName = toKebabCase(projectName);

    // verify that project folder doesnt already exist
    checkIfFolderExists(kebabProjectName);

    // update files to be replaced with project name reference
    filesToReplace = filesToReplace.map(p => `${kebabProjectName}/${p}`);

    this.log(`${CLI_STATE.Info} creating mobile project ${chalk.whiteBright(kebabProjectName)}`);

    // retrieve project files from template source
    await shell.exec(`git clone ${template} --depth 1 --branch ${tag} ${kebabProjectName}`, { silent: !versbose });

    // find and replace project name references
    const success = await replaceInFiles(filesToReplace, replaceRegex, `${kebabProjectName}`);

    MOBILE_TEMPLATE_CI_CD_REPLACEMENT_FILES
      .map(file => `${kebabProjectName}/${file}`)
      // eslint-disable-next-line unicorn/no-array-for-each
      .forEach(async file => {
        await replaceInFiles(file, /__PROJECT_SCHEME__/g, toPascalCase(projectName));
        await replaceInFiles(file, /__BUNDLE_IDENTIFIER__/g, bundleIdenifier.toLowerCase());
      });

    if (success === false) {
      throw new Error(
        JSON.stringify({
          code: 'file-not-changed',
          message: 'updating your project failed',
        }),
      );
    }

    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} Initializing Git`);
    }

    // remove git folder reference to base project
    await shell.exec(`npm install -g rimraf && npx rimraf ${kebabProjectName}/.git`, { silent: !versbose });

    // initialize git in the created project
    await shell.exec(`cd ${kebabProjectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: !versbose });

    if (isTest !== true) {
      ux.action.stop();
    }

    // Installing dependencies
    if (isTest !== true) {
      ux.action.start(`${CLI_STATE.Info} Installing dependencies`);
    }

    await shell.exec(`cd ${kebabProjectName} && npm install`, { silent: !versbose });

    if (isTest !== true) {
      ux.action.stop();
    }

    this.log(`\n${CLI_STATE.Success} ${chalk.whiteBright(kebabProjectName)} is ready!`);

    // Output final instructions to user
    this.log(`\n${chalk.magenta('Next Steps:')}\n${chalk.magenta('-')} cd ${chalk.whiteBright(kebabProjectName)}\n${chalk.magenta('-')} npm run [ android || ios ]\n\nIf you want to integrate with the ${chalk.blue('native')} project, you can run the following command inside the project's root directroy:\n${chalk.magenta('-')} npm run eject\n`);
  }
}
