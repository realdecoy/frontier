import shell from 'shelljs';
import chalk from 'chalk';
import { Command, flags } from '@oclif/command';
import { CliUx } from '@oclif/core';
import { toKebabCase, toPascalCase, isJsonString } from '@rdfrontier/stdlib';
import {
  parseProjectName,
  checkProjectValidity,
  parseBundleIdentifier
} from '../../../lib/utilities';
import { replaceInFiles, checkIfFolderExists } from '../../../lib/files';
import {
  TEMPLATE_TAG,
  TEMPLATE_PROJECT_NAME_REGEX,
  CLI_STATE,
  MOBILE_TEMPLATE_REPLACEMENT_FILES,
  MOBILE_TEMPLATE_REPO,
  MOBILE_TEMPLATE_CI_CD_REPLACEMENT_FILES,
} from '../../../lib/constants';

const CUSTOM_ERROR_CODES = [
  'existing-project',
  'existing-folder',
  'file-not-changed',
];

export default class CreateProject extends Command {
  static description = 'create a new mobile project'

  static flags = {
    help: flags.help({ char: 'h' }),
    verbose: flags.boolean({ hidden: true }),
    // bare: flags.boolean({ hidden: true }),
  }

  static args = [
    { name: 'name', description: 'name of created project' },
    { name: 'bundleIdenifier', description: 'The name of the unique identifier that will used for deployment to the App & Google play Store (eg. com.company.app)' }
  ]

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
    if (CUSTOM_ERROR_CODES.includes(customErrorCode)) {
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
  }

  async run(): Promise<void> {
    const { args, flags } = this.parse(CreateProject);
    const versbose = flags.verbose === true;
    const template: string = MOBILE_TEMPLATE_REPO;
    const tag: string = TEMPLATE_TAG;
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

    CliUx.ux.action.start(`${CLI_STATE.Info} Initializing Git`);
    // remove git folder reference to base project    
    await shell.exec(`npm install -g rimraf && npx rimraf ${kebabProjectName}/.git`, { silent: !versbose });

    // initialize git in the created project
    await shell.exec(`cd ${kebabProjectName} && git init && git add . && git commit -m "Setup: first commit" && git branch -M main`, { silent: !versbose });
    CliUx.ux.action.stop();

    // Installing dependencies
    CliUx.ux.action.start(`${CLI_STATE.Info} Installing dependencies`);
    await shell.exec(`cd ${kebabProjectName} && npm install`, { silent: !versbose });
    CliUx.ux.action.stop();

    this.log(`\n${CLI_STATE.Success} ${chalk.whiteBright(kebabProjectName)} is ready!`);

    // Output final instructions to user
    this.log(`\n${chalk.magenta('Next Steps:')}\n${chalk.magenta('-')} cd ${chalk.whiteBright(kebabProjectName)}\n${chalk.magenta('-')} npm run [ android || ios ]\n\nIf you want to integrate with the ${chalk.blue('native')} project, you can run the following command inside the project's root directroy:\n${chalk.magenta('-')} npm run eject\n`);
  }
}
