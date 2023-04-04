/* eslint-disable no-process-exit */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable max-lines */
// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import prompts from 'prompts';
import { getProjectRoot, writeFile } from './files';
import { ChangeLog, ChangelogConfigTypes, Lookup } from '../modules';
import { CLI_STATE, VUE_TEMPLATE_TAG, VUE_PLUGIN_PRESET_LIST } from './constants';

/**
 * Description: determine if string is valid JSON string
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function isJsonString(value: string): boolean {
  try {
    JSON.parse(value);
  } catch {
    return false;
  }

  return true;
}

/**
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasKebab(value = ''): boolean {
  let result = false;
  if (value.match(/kebab/gi) !== null) {
    result = true;
  }

  return result;
}

/**
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasCamel(value = ''): boolean {
  let result = false;
  if (value.match(/camel/gi) !== null) {
    result = true;
  }

  return result;
}

/**
 * Description: convert a string to kebab case (e.g. my-project-name)
 * @param {string} value - a
 * @returns {string} - string value
 */
function toKebabCase(value: string): string {
  return value &&
    (value.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [''])
      .map(x => x.toLowerCase())
      .join('-');
}

/**
 * Description: convert a string to camel case (e.g. myProjectName)
 * @param {string} value - a
 * @returns {string} - string value
 */
function toCamelCase(value: string): string {
  const pascal = toPascalCase(value);

  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Description: convert a string to kebab case (e.g. my-project-name)
 * @param {string} value - a string value
 * @returns {string} -
 */
function toPascalCase(value: string): string {
  return value
    .split(/[ _-]+/)
    .join(' ')
    .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
    .split(' ')
    .join('');
}

/**
 * Description: remove the prefix '[frontier]' from a string
 * @param {string} value - a string value
 * @returns {string} - a string with the prefix '[frontier]' removed
 */
function stripFrontierPrefix(value: string): string {
  return value.replace('[frontier]', '');
}

// eslint-disable-next-line valid-jsdoc
/**
 * Description: Throws an error with the provided message
 * @param {string} errorMessage - error message to be thrown
 * @throws {Error}
 */
function throwNameError(errorMessage: string): void {
  throw new Error(
    JSON.stringify({
      code: 'name-invalid',
      message: stripFrontierPrefix(errorMessage),
    }),
  );
}

/**
 * Description: determine if string is valid component name
 * @param {string} featureName - the name of the feature whose name is being validated
 * @param {string} exampleName - an example of a valid name
 * @returns {any} -
 */
function validateEnteredName(featureName: string, exampleName = '') {
  return (value: any) => {
    const isString = typeof value === 'string';
    const isNull = value === null || value.length === 0;
    // characters in value are limited to alphanumeric characters and hyphens or underscores
    const charactersMatch = value.match(/^[\w.-]+$/i) !== null;
    const isValidName = isString && charactersMatch;
    let resultMessage = '';
    if (isNull) {
      resultMessage = `${CLI_STATE.Error} A ${featureName} name is required`;
    } else if (!charactersMatch) {
      resultMessage = `${CLI_STATE.Error} Use letters, numbers and '-' for ${featureName} names (e.g. ${exampleName ? exampleName : `my-${featureName}-name`})`;
    }

    return isValidName ? true : resultMessage;
  };
}

/**
 * Description: determine if string is valid project name
 * @param {string} value - a string value
 * @returns {any} -
 */
function validateDomain(value: string) {
  const isString = typeof value === 'string';
  const isNull = value === null || value.length === 0;
  // characters in value are limited to alphanumeric characters and hyphens or underscores
  const charactersMatch =
    value.match(
      /(?:[\da-z](?:[\da-z-]{0,61}[\da-z])?\.)+[\da-z][\da-z-]{0,61}[\da-z]/,
    ) !== null;
  const isValid = isString && charactersMatch;
  let resultMessage = '';

  if (isNull) {
    resultMessage = `${CLI_STATE.Error} A bundleIdentifier is required`;
  } else if (!charactersMatch) {
    resultMessage = `${CLI_STATE.Error} bundleIdenifiter should be a valid domain. Normally this is the reverse of you website's domain (e.g. com.company.app)`;
  }

  return isValid ? true : resultMessage;
}

/**
 * Description: parse component or prompt user to provide name for component
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseComponentName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateComponentName = validateEnteredName('component');
  // if no component name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'my-component',
      message: 'Enter a component name: ',
      type: 'text',
      validate: validateComponentName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add component canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateComponentName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseScreenName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validatePageName = validateEnteredName('screen');
  // if no page name is provided in command then prompt user
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'hello-world',
      message: 'Enter a screen name: ',
      type: 'text',
      validate: validatePageName,
    }]);
    argName = responses.name;
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseProjectName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateProjectName = validateEnteredName('project');
  // if no project name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'my-vue-project',
      message: 'Enter a project name: ',
      type: 'text',
      validate: validateProjectName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} create-project canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateProjectName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse layout or prompt user to provide name for layout
 * @param {string} args  - a string value
 * @returns {Lookup} -
 */
async function parseLayoutName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateLayoutName = validateEnteredName('layout');
  // if no layout name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'my-layout',
      message: 'Enter a layout name: ',
      type: 'text',
      validate: validateLayoutName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add layout canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateLayoutName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for template version
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseVersionName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateVersionName = validateEnteredName('version');
  // if no page name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: VUE_TEMPLATE_TAG,
      message: 'Enter a version: ',
      type: 'text',
      validate: validateVersionName,
    }]);
    argName = responses.name;
  } else {
    const result = validateVersionName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseProjectPresets(args: Lookup): Promise<string> {
  let argName = args.preset;
  // if no project name is provided in command then prompt user
  if (!argName) {
    const responses: any = await prompts([{
      name: 'preset',
      initial: 0,
      message: 'Pick a preset: ',
      type: 'select',
      choices: VUE_PLUGIN_PRESET_LIST.map((item: string) => {
        return {
          title: item,
        };
      }),
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} create-project canceled`);

        return false;
      },
    });
    if (responses.preset === undefined) {
      process.exit(1);
    }

    argName = responses.preset;
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parsePageName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validatePageName = validateEnteredName('page');
  // if no page name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'hello-world',
      message: 'Enter a page name: ',
      type: 'text',
      validate: validatePageName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add page canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validatePageName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseServiceName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateServiceName = validateEnteredName('service');
  // if no page name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'auth-service',
      message: 'Enter a service name: ',
      type: 'text',
      validate: validateServiceName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add service canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateServiceName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseStoreModuleName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateStoreModuleName = validateEnteredName('store', 'auth-store');
  // if no page name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'auth-store',
      message: 'Enter a store module name: ',
      type: 'text',
      validate: validateStoreModuleName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add store canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateStoreModuleName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse project or prompt user to provide name for project
 * @param {Lookup} args - a string value
 * @returns {string} -
 */
async function parseBundleIdentifier(args: Lookup): Promise<string> {
  let argName = args.bundleIdenifier;
  // if no page name is provided in command then prompt user
  if (!argName) {
    const responses: any = await prompts([{
      name: 'temp',
      initial: 'com.company.app',
      message: 'Enter app\'s Bundle Idenifier: ',
      type: 'text',
      validate: validateDomain,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} create-project canceled`);

        return false;
      },
    });

    argName = responses.temp;
  }

  return argName;
}

/**
 * Description: determine if command is ran within a valid frontier project
 * @returns {any} -
 */
function checkProjectValidity(): { isValid: boolean, projectRoot: string } {
  const results = {
    isValid: false,
    projectRoot: '',
  };

  const projectRoot: string | null = getProjectRoot();
  if (projectRoot !== null && projectRoot !== '') {
    results.isValid = true;
    results.projectRoot = projectRoot;
  } else {
    results.isValid = false;
  }

  return results;
}
/**
 * Description: generates a changelog.md file from the resource groups
 * in the changeLogData object.
 * @param {string} versionName - the version name to use in the changelog.md file
 * @param {string} changelogPath - the path where the changelog.md file will be generated
 * @param {ChangeLog} changeLogData - the data to use in the changelog.md file
 * @returns {void}
 */

function createChangelogReadme(
  versionName: string,
  changelogPath: string,
  changeLogData: ChangeLog,
): void {
  const createdChangeLogResources = changeLogData[ChangelogConfigTypes.CREATE]?.resources ?? [];
  const deletedChangeLogResources = changeLogData[ChangelogConfigTypes.DELETE]?.resources ?? [];
  const updatedChangeLogResources = changeLogData[ChangelogConfigTypes.UPDATE]?.resources ?? [];
  const createdFiles: string[] = createdChangeLogResources.map(resource => {
    if (resource.srcPath) {
      return `${resource.srcPath}/${resource.file?.target}`;
    }

    return `${resource.file?.target}`;
  });

  const deletedFiles: string[] = deletedChangeLogResources.map(resource => {
    if (resource.destPath) {
      return `${resource.destPath}/${resource.name}`;
    }

    return `${resource.name}`;
  });

  const updatedFiles: string[] = updatedChangeLogResources.map(resource => (resource.destPath));

  const readmeContent =
    `
# Changelog - ${versionName}
The \`upgrade\` command is used to upgrade a project to the latest version of the template, or to a specified version.
During the course of the upgrade files may be added, deleted or updated. When it comes to updating, .json files are updated inline. For changes to all other file types, your existing project file will not be touched, but a file will be created at the same path containing the new changes to the template's base file, in the form of ${'`<existing_filename>.update.<extension>`'}
  
## Added Files
${createdFiles.map(file => `- ${file}`).join('\n')}
 
## Deleted Files
${deletedFiles.map(file => `- ${file}`).join('\n')}
  
## Updated Files
${updatedFiles.map(file => `- ${file}`).join('\n')}
  
## Notes on the Upgrade
${changeLogData.reccomendations || 'No notes on the upgrade'}
`;
  writeFile(changelogPath, readmeContent);
  // eslint-disable-next-line no-console
  console.log(readmeContent);
}

export {
  hasCamel,
  hasKebab,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  parseComponentName,
  parseScreenName,
  parseLayoutName,
  parseProjectName,
  parseProjectPresets,
  parseVersionName,
  parsePageName,
  parseServiceName,
  parseStoreModuleName,
  parseBundleIdentifier,
  isJsonString,
  checkProjectValidity,
  createChangelogReadme,
};
