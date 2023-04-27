import chalk from 'chalk';

/* eslint-disable no-unused-vars */
export const VUE_TEMPLATE_ROOT = '.rdvue/template';
export const MOBILE_TEMPLATE_ROOT = '.rdvue/template';
export const DOTNET_TEMPLATE_ROOT = '.frontier/template';
export const MOBILE_TEMPLATE_REPO =
  'https://github.com/realdecoy/rdvue-mobile-template';
export const VUE_TEMPLATE_REPO = 'https://github.com/realdecoy/rdvue-template';
export const DOTNET_TEMPLATE_REPO = 'Net.WebApi.Template::';
export const DESIGN_TEMPLATE_REPO = 'https://github.com/realdecoy/design-system-components';
export const VUE_TEMPLATE_TAG = 'v2.3.1'; // replace this with the appropriate release tag in the template repo
export const MOBILE_TEMPLATE_TAG = 'beta-refactor'; // replace this with the appropriate release tag in the template repo
export const DOTNET_TEMPLATE_TAG = '1.0.0-rc.5'; // replace this with the appropriate release tag in the template repo
export const DOTNET_TEMPLATE_SHORT_NAME = 'net7webapi'; // replace this with the appropriate release tag in the template repo
export const DESIGN_TEMPLATE_FOLDER = 'library';
export const TEMPLATE_PROJECT_NAME_REGEX = /__PROJECT_NAME__/g;
export const TEMPLATE_MOBILE_PROJECT_SCEHEM_REGEX = /__PROJECT_SCHEME__/g;
export const TEMPLATE_MOBILE_PROJECT_BUNLDE_IDNEITIFIER_REGEX = /__BUNDLE_IDENTIFIER__/g;
export const TEMPLATE_CONFIG_FILENAME = 'manifest.json';
export const CHANGE_LOG_FOLDER = 'changelogs';
export const CHANGE_LOG_FILENAME = 'CHANGELOG.md';
export const EMPTY_STRING = '';
export const CHAR_PERIOD = '.';
export const RDVUE_DIRECTORY = '.rdvue';
export const FRONTIER_RC = '.frontierrc';
export const RDVUE_COPY = '.rdvue-copy';

export const CLI_NAMESPACES = [
  'vue',
  'mobile',
  'dotnet',
  'iac',
  'qa',
];

enum VUE_CLI_COMMANDS_ENUM {
  CreateProject = 'vue create-project',
  Upgrade = 'vue upgrade',
  AddComponent = 'vue add component',
  AddPage = 'vue add page',
  AddService = 'vue add service',
  AddStore = 'vue add store',
  AddLayout = 'vue add layout',
  AddModule = 'vue add',
  PluginBuefy = 'vue plugin buefy',
  PluginLocalization = 'vue plugin localization',
  PluginVuetify = 'vue plugin vuetify',
  PluginLibrary = 'vue plugin',
  PoorHelpCommand = 'add-help'
}
export const VUE_CLI_COMMANDS = VUE_CLI_COMMANDS_ENUM;

enum ADAM_CLI_COMMANDS_ENUM {
  Hello = 'adam hello',
  World = 'adam world',
  WorldGalaxy = 'adam world galaxy',
  PoorHelpCommand = 'adam-help'
}
export const ADAM_CLI_COMMANDS = ADAM_CLI_COMMANDS_ENUM;

enum DOTNET_CLI_COMMANDS_ENUM {
  CreateProject = 'dotnet create-project',
  AddModule = 'dotnet add',
  AddEndpoint = 'dotnet add endpoint',
  AddQuery = 'dotnet add query',
  AddCommand = 'dotnet add command',
  AddEntity = 'dotnet add entity',
  AddConfiguration = 'dotnet add configuration',
  MigrationNew = 'dotnet mirate new',
  MigrationUp = 'dotnet mirate up',
  MigrationDown = 'dotnet mirate down',
  MigrationRemove = 'dotnet mirate remove',
  PluginBackground = 'dotnet plugin background',
  PoorHelpCommand = 'add-help'
}
export const DOTNET_CLI_COMMANDS = DOTNET_CLI_COMMANDS_ENUM;

enum MOBILE_CLI_COMMANDS_ENUM {
  CreateProject = 'mobile create-project',
  AddComponent = 'mobile add component',
  AddLayout = 'mobile add layout',
  AddScreen = 'mobile add screen',
  AddService = 'mobile add service',
  AddStore = 'mobile add store',
  AddModule = 'mobile add',
  PluginLocalization = 'mobile plugin localization',
  PluginBitrise = 'mobile plugin bitrise',
  PluginLibrary = 'mobile plugin',
  PoorHelpCommand = 'add-help',
}
export const MOBILE_CLI_COMMANDS = MOBILE_CLI_COMMANDS_ENUM;

enum VUE_DOCUMENTATION_LINKS_ENUM {
  FrontierVue = 'http://frontier.realdecoy.com/vue/introduction/whats-frontier-vue',
  Component = 'http://frontier.realdecoy.com/vue/features/components',
  Layout = 'http://frontier.realdecoy.com/vue/features/layouts',
  Page = 'http://frontier.realdecoy.com/vue/features/pages',
  Service = 'http://frontier.realdecoy.com/vue/features/services',
  Store = 'http://frontier.realdecoy.com/vue/features/stores',
  EsBuild = 'http://frontier.realdecoy.com/vue/features/bundle-analysis',
}
export const VUE_DOCUMENTATION_LINKS = VUE_DOCUMENTATION_LINKS_ENUM;

enum DOTNET_DOCUMENTATION_LINKS_ENUM {
  FrontierDotnet = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
  Entity = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
  Endpoint = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
  Query = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
  Command = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
  Configuration = 'http://frontier.realdecoy.com/frontier/introduction/whats-frontier',
}
export const DOTNET_DOCUMENTATION_LINKS = DOTNET_DOCUMENTATION_LINKS_ENUM;

enum MOBILE_DOCUMENTATION_LINKS_ENUM {
  FrontierMobile = 'http://frontier.realdecoy.com/mobile/introduction/whats-frontier-mobile',
  Component = 'http://frontier.realdecoy.com/mobile/features/components',
  Screen = 'http://frontier.realdecoy.com/mobile/features/screens',
  Service = 'http://frontier.realdecoy.com/mobile/features/services',
  Navigation = 'http://frontier.realdecoy.com/mobile/features/navigation',
  Store = 'http://frontier.realdecoy.com/mobile/features/stores',
}
export const MOBILE_DOCUMENTATION_LINKS = MOBILE_DOCUMENTATION_LINKS_ENUM;

export const VUE_PLUGIN_PRESET_LIST = [
  'Buefy & Localization (recommended)',
  'Vuetify & Localization',
  '[Skip presets]',
];

export const VUE_TEMPLATE_REPLACEMENT_FILES = [
  'README.md',
  'package.json',
  '.rdvue/.rdvue',
  'public/index.html',
  'public/manifest.json',
];

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
  Info: `${chalk.blue('[frontier]')}`,
  Error: `${chalk.red('[frontier]')}`,
  Warning: `${chalk.yellow('[frontier]')}`,
  Success: `${chalk.green('[frontier]')}`,
};

export const BITRISE_CONFIGS = {
  baseURL: 'https://api.bitrise.io/v0.1',
};

export const REQUEST_TIMEOUT_MILLISECONDS = 3600;

enum VUE_DYNAMIC_OBJECTS_ENUM {
  Routes = 'routes',
  Store = 'store',
  Options = 'options',
  Modules = 'modules',
}

export const VUE_DYNAMIC_OBJECTS = VUE_DYNAMIC_OBJECTS_ENUM;

enum MOBILE_DYNAMIC_OBJECTS_ENUM {
  Routes = 'routes',
  Store = 'store',
  Options = 'options',
  Modules = 'modules',
}

export const MOBILE_DYNAMIC_OBJECTS = MOBILE_DYNAMIC_OBJECTS_ENUM;
