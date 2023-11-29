/* eslint-disable no-process-exit */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable max-lines */
// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import prompts from 'prompts';
import { getProjectRoot, writeFile, readMigrationNames, readApiFeatureNames } from './files.js';
import { ChangeLog, ChangelogConfigTypes, Lookup } from '../modules/index.js';
import { CLI_STATE, VUE_TEMPLATE_TAG, VUE_PLUGIN_PRESET_LIST, ROOT_SPECTRE_FILE, DEFAULT_PAGE_OBJECT_URL } from './constants.js';
import { existsSync } from 'node:fs';
import { pascalCase } from '@rd-page-object-generator/core';

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
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasProject(value = ''): boolean {
  let result = false;
  if (value.match(/project/gi) !== null) {
    result = true;
  }

  return result;
}

/**
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasFeature(value = ''): boolean {
  let result = false;
  if (value.match(/feature/gi) !== null) {
    result = true;
  }

  return result;
}

/**
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasEndpoint(value = ''): boolean {
  let result = false;
  if (value.match(/endpointname/gi) !== null) {
    result = true;
  }

  return result;
}

/**
 * Description: check if string has a substring 'kebab' in it
 * @param {string} value - a string value
 * @returns {boolean} -
 */
function hasEndpointLower(value = ''): boolean {
  let result = false;
  if (value.match(/endpointlowername/gi) !== null) {
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
 * Description: convert a string to pascal case (e.g. MyProjectName)
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

// eslint-disable-next-line valid-jsdoc
/**
 * Description: Throws an error with the provided message
 * @param {string} errorMessage - error message to be thrown
 * @throws {Error}
 */
function throwTypeError(errorMessage: string): void {
  throw new Error(
    JSON.stringify({
      code: 'type-invalid',
      message: stripFrontierPrefix(errorMessage),
    }),
  );
}

// eslint-disable-next-line valid-jsdoc
/**
 * Description: Throws an error with the provided message
 * @param {string} errorMessage - error message to be thrown
 * @throws {Error}
 */
function throwUrlError(errorMessage: string): void {
  throw new Error(
    JSON.stringify({
      code: 'url-invalid',
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
 * Description: determine if string is valid URL
 * @param {string} featureUrl - the name of the feature whose URL is being validated
 * @param {string} exampleUrl - an example of a valid URL
 * @param {string} required   - true if the URL is required
 * @returns {any} -
 */
function validateEnteredUrl(featureUrl: string, exampleUrl = '', required = true) {
  return (value: any) => {
    const isString = typeof value === 'string';
    const isNull = value === null || value.length === 0;
    // characters in value are limited to alphanumeric characters and hyphens or underscores
    const charactersMatch = value.match(/\bhttps?:\/\/(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?\b/i) !== null;
    const isValidUrl = (isString && charactersMatch) || (isNull && !required);
    let resultMessage = '';
    if (isNull && required) {
      resultMessage = `${CLI_STATE.Error} A ${featureUrl} URL is required`;
    } else if (!charactersMatch) {
      resultMessage = `${CLI_STATE.Error} Use letters, numbers and '-' for ${featureUrl} URLs (e.g. ${exampleUrl ? exampleUrl : `https://my-${featureUrl}-url.com`})`;
    }

    return isValidUrl ? true : resultMessage;
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
 * Description: parse page object name or prompt user to provide name for page object
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parsePageObjectName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validatePageObjectName = validateEnteredName('page object');
  // if no page object name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'my-page-object',
      message: 'Enter a page object name: ',
      type: 'text',
      validate: validatePageObjectName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add page object canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validatePageObjectName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse page object source url or prompt user to provide source url for page object
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parsePageObjectUrl(args: Lookup): Promise<string> {
  let argUrl = args.url;
  const example = DEFAULT_PAGE_OBJECT_URL;
  const validatePageObjectUrl = validateEnteredUrl('page object', example, false);
  // if no page object url is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argUrl) {
    const responses: any = await prompts([{
      name: 'URL',
      message: 'Enter a page object source URL (optional): ',
      type: 'text',
      validate: validatePageObjectUrl,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add page object canceled`);

        return false;
      },
    });
    if (responses.URL === undefined) {
      process.exit(1);
    }

    argUrl = responses.URL;
  } else {
    const result = validatePageObjectUrl(argUrl);
    if (result && result !== true) {
      throwUrlError(result);
    }
  }

  return argUrl;
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
 * @param {string} defaultName - a string value
 * @returns {Lookup} -
 */
async function parseProjectName(args: Lookup, defaultName = 'my-vue-project'): Promise<string> {
  let argName = args.name;
  const validateProjectName = validateEnteredName('project');
  // if no project name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: defaultName,
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
 * Description: parse spectre project type or prompt user to provide type of project
 * @param {string} args - a string value
 * @param {string} defaultType - a string value
 * @returns {Lookup} -
 */
async function parseSpectreProjectType(args: Lookup, defaultType = 'web'): Promise<string> {
  let argType = args.type;
  const choices = ['web', 'mobile'];
  const validateProjectType = (type: string | null) => Boolean(type && choices.includes(type));
  // if no project type is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argType) {
    const responses: any = await prompts([{
      name: 'type',
      initial: choices.indexOf(defaultType),
      message: 'What type of project is this? ',
      type: 'select',
      choices: choices.map(title => ({ title: pascalCase(title), value: title })),
      validate: validateProjectType,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} create-project canceled`);

        return false;
      },
    });
    if (responses.type === undefined) {
      process.exit(1);
    }

    argType = responses.type;
  } else {
    const result = validateProjectType(argType);
    if (result && result !== true) {
      throwTypeError(result);
    }
  }

  return argType;
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
 * Description: parse Migration or prompt user to provide name for Migration
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseMigrationName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateMigrationName = validateEnteredName('migration');
  // if no Migration name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'InitialMigration',
      message: 'Enter a migration name: ',
      type: 'text',
      validate: validateMigrationName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add migration canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateMigrationName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse Entity or prompt user to provide name for Entity
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseEntityName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateEntityName = validateEnteredName('entity');
  // if no Entity name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'User',
      message: 'Enter an entity name: ',
      type: 'text',
      validate: validateEntityName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add entity canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateEntityName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse Configuration or prompt user to provide name for Configuration
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseConfigurationName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateConfigurationName = validateEnteredName('configuration');
  // if no Configuration name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'User',
      message: 'Enter a configuration name: ',
      type: 'text',
      validate: validateConfigurationName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add configuration canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateConfigurationName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse Command or prompt user to provide name for Command
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseCommandName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateCommandName = validateEnteredName('command');
  // if no Command name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'name',
      initial: 'RegisterUser',
      message: 'Enter a command name: ',
      type: 'text',
      validate: validateCommandName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add command canceled`);

        return false;
      },
    });
    if (responses.name === undefined) {
      process.exit(1);
    }

    argName = responses.name;
  } else {
    const result = validateCommandName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse Endpoint or prompt user to provide name for Endpoint
 * @param {string} args - a string value
 * @returns {Lookup} -
 */
async function parseEndpointName(args: Lookup): Promise<string> {
  let argName = args.name;
  const validateEndpointName = validateEnteredName('endpoint');
  // if no Endpoint name is provided in command then prompt user
  // eslint-disable-next-line no-negated-condition
  if (!argName) {
    const responses: any = await prompts([{
      name: 'endpoint',
      initial: 'Authentication',
      message: 'Enter an endpoint name: ',
      type: 'text',
      validate: validateEndpointName,
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add endpoint canceled`);

        return false;
      },
    });
    if (responses.endpoint === undefined) {
      process.exit(1);
    }

    argName = responses.endpoint;
  } else {
    const result = validateEndpointName(argName);
    if (result && result !== true) {
      throwNameError(result);
    }
  }

  return argName;
}

/**
 * Description: parse existing migrations for project
 * @param {Lookup} args - a string value
 * @param {string} projectName - a string value
 * @param {string} type - a string value
 * @returns {string} -
 */
async function parseApiFeatures(args: Lookup, projectName: string, type: string): Promise<string> {
  let argName = args.name;
  // if no migration name is provided in command then prompt user
  const apiFeatureNames = readApiFeatureNames(projectName);

  if (!argName) {
    // read existing migrations
    const responses: any = await prompts([{
      name: 'feature',
      initial: 0,
      message: `Pick a feature to to insert your ${type}: `,
      type: 'select',
      choices: apiFeatureNames.map((item: string) => {
        return {
          title: item,
        };
      }),
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} add ${type} canceled`);

        return false;
      },
    });
    if (responses.feature === undefined) {
      process.exit(1);
    }

    argName = apiFeatureNames[responses.feature];
  }

  return argName;
}

/**
 * Description: parse existing migrations for project
 * @param {Lookup} args - a string value
 * @param {string} projectName - a string value
 * @returns {string} -
 */
async function parseMigrations(args: Lookup, projectName: string): Promise<string> {
  let argName = args.name;
  // if no migration name is provided in command then prompt user
  const migrationNames = readMigrationNames(projectName);

  if (!argName) {
    // read existing migrations
    const responses: any = await prompts([{
      name: 'migration',
      initial: 0,
      message: 'Pick a migration to rollback to: ',
      type: 'select',
      choices: migrationNames.map((item: string) => {
        return {
          title: item,
        };
      }),
    }], {
      onCancel() {
        // eslint-disable-next-line no-console
        console.log(`${chalk.red('frontier')} migration canceled`);

        return false;
      },
    });
    if (responses.migration === undefined) {
      process.exit(1);
    }

    argName = migrationNames[responses.migration];
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

    argName = VUE_PLUGIN_PRESET_LIST[responses.preset];
  }

  return argName;
}

/**
 * This method checks if the project where a command is being ran is a valid spectre project
 * @returns {boolean} - is this command being ran in a valid project
 */
export function checkSpectreProjectValidity(): boolean {
  // Checks if this is a valid web automation project
  if (existsSync(ROOT_SPECTRE_FILE) === true) {
    return true;
  }

  return false;
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
  hasProject,
  hasFeature,
  hasEndpoint,
  hasEndpointLower,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  parseMigrationName,
  parseEntityName,
  parseConfigurationName,
  parseCommandName,
  parseEndpointName,
  parseApiFeatures,
  parseMigrations,
  parseComponentName,
  parsePageObjectName,
  parsePageObjectUrl,
  parseScreenName,
  parseLayoutName,
  parseProjectName,
  parseSpectreProjectType,
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
