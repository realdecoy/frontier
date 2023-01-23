import chalk from 'chalk';

export const TEMPLATE_ROOT = '.rdvue/template';
export const MOBILE_TEMPLATE_REPO =
  'https://github.com/realdecoy/rdvue-mobile-template';
// export const TEMPLATE_TAG = 'main'; // replace this with the appropriate release tag in the template repo
export const TEMPLATE_TAG = 'beta-refactor'; // replace this with the appropriate release tag in the template repo
export const TEMPLATE_PROJECT_NAME_REGEX = /__PROJECT_NAME__/g;
export const TEMPLATE_MOBILE_PROJECT_SCEHEM_REGEX = /__PROJECT_SCHEME__/g;
export const TEMPLATE_MOBILE_PROJECT_BUNLDE_IDNEITIFIER_REGEX = /__BUNDLE_IDENTIFIER__/g;
export const TEMPLATE_VERSIONS_SUPPORTED = [2];
export const TEMPLATE_CONFIG_FILENAME = 'manifest.json';

enum DYNAMIC_OBJECTS_ENUM {
  Routes = 'routes',
  Store = 'store',
  Options = 'options',
  Modules = 'modules',
}
export const DYNAMIC_OBJECTS = DYNAMIC_OBJECTS_ENUM;

enum CLI_COMMANDS_ENUM {
  CreateProject = 'create-project',
  Upgrade = 'upgrade',
  AddComponent = 'add:component',
  AddLayout = 'add:layout',
  AddScreen = 'add:screen',
  AddService = 'add:service',
  AddStore = 'add:store',
  AddModule = 'add',
  PluginBuefy = 'plugin:buefy',
  PluginLocalization = 'plugin:localization',
  PluginVuetify = 'plugin:vuetify',
  PluginBitrise= 'plugin:bitrise',
  PluginLibrary = 'plugin',
  PoorHelpCommand = 'add-help',
}
export const CLI_COMMANDS = CLI_COMMANDS_ENUM;

enum DOCUMENTATION_LINKS_ENUM {
  Rdvue = 'https://realdecoy.github.io/rdvue/#/',
  Component = 'https://realdecoy.github.io/rdvue/#/Features?id=components',
  Page = 'https://realdecoy.github.io/rdvue/#/Features?id=pages',
  Layout = 'https://realdecoy.github.io/rdvue/#/Features?id=layouts',
  Service = 'https://realdecoy.github.io/rdvue/#/Features?id=services',
  Store = 'https://realdecoy.github.io/rdvue/#/Features?id=stores',
}
export const DOCUMENTATION_LINKS = DOCUMENTATION_LINKS_ENUM;


export const MOBILE_TEMPLATE_REPLACEMENT_FILES = [
  'package.json',
  'package-lock.json',
  '.rdvue/.rdvue',
  'app.json',
];

export const MOBILE_TEMPLATE_CI_CD_REPLACEMENT_FILES = [
  'bitrise.yml',
  'app.json',
];

export const CLI_STATE = {
  Info: `${chalk.blue('[mobile]')}`,
  Error: `${chalk.red('[mobile]')}`,
  Warning: `${chalk.yellow('[mobile]')}`,
  Success: `${chalk.green('[mobile]')}`,
};

export const BITRISE_CONFIGS = {
  baseURL: 'https://api.bitrise.io/v0.1',
};

export const REQUEST_TIMEOUT_MILLISECONDS = 3600;
