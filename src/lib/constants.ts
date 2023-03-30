/* eslint-disable no-unused-vars */
export const TEMPLATE_ROOT = '.rdvue/template';
export const TEMPLATE_REPO = 'https://github.com/realdecoy/rdvue-template';
export const DESIGN_TEMPLATE_REPO = 'https://github.com/realdecoy/design-system-components';
export const TEMPLATE_TAG = 'v2.2.3'; // replace this with the appropriate release tag in the template repo
export const DESIGN_TEMPLATE_FOLDER = 'library';
export const TEMPLATE_PROJECT_NAME_REGEX = /__PROJECT_NAME__/g;
export const TEMPLATE_CONFIG_FILENAME = 'manifest.json';
export const CHANGE_LOG_FOLDER = 'changelogs';
export const CHANGE_LOG_FILENAME = 'CHANGELOG.md';
export const EMPTY_STRING = '';
export const CHAR_PERIOD = '.';
export const RDVUE_DIRECTORY = '.rdvue';
export const FRONTIER_RC = '.frontierrc';
export const RDVUE_COPY = '.rdvue-copy';

enum DYNAMIC_OBJECTS_ENUM {
  Routes = 'routes',
  Store = 'store',
  Options = 'options',
  Modules = 'modules',
}
export const DYNAMIC_OBJECTS = DYNAMIC_OBJECTS_ENUM;

enum CLI_COMMANDS_ENUM {
  CreateProject = 'plugin-vue create-project',
  Upgrade = 'plugin-vue upgrade',
  AddComponent = 'plugin-vue add component',
  AddPage = 'plugin-vue add page',
  AddService = 'plugin-vue add service',
  AddStore = 'plugin-vue add store',
  AddLayout = 'plugin-vue add layout',
  AddModule = 'plugin-vue add',
  PluginBuefy = 'plugin-vue plugin buefy',
  PluginLocalization = 'plugin-vue plugin localization',
  PluginVuetify = 'plugin-vue plugin vuetify',
  PluginLibrary = 'plugin-vue plugin',
  PoorHelpCommand = 'add-help'
}
export const CLI_COMMANDS = CLI_COMMANDS_ENUM;

enum DOCUMENTATION_LINKS_ENUM {
  Rdvue = 'https://realdecoy.github.io/rdvue/#/',
  Component = 'https://realdecoy.github.io/rdvue/#/Features?id=components',
  Layout = 'https://realdecoy.github.io/rdvue/#/Features?id=layouts',
  Page = 'https://realdecoy.github.io/rdvue/#/Features?id=pages',
  Service = 'https://realdecoy.github.io/rdvue/#/Features?id=services',
  Store = 'https://realdecoy.github.io/rdvue/#/Features?id=stores',
  EsBuild = 'https://esbuild.github.io/',
}
export const DOCUMENTATION_LINKS = DOCUMENTATION_LINKS_ENUM;

export const PLUGIN_PRESET_LIST = [
  'Buefy & Localization (recommended)',
  'Vuetify & Localization',
  '[Skip presets]',
];

export const TEMPLATE_REPLACEMENT_FILES = [
  'README.md',
  'package.json',
  '.rdvue/.rdvue',
  'public/index.html',
  'public/manifest.json',
];

export const CLI_STATE = {
  Info: '[rdvue]',
  Error: '[rdvue]',
  Warning: '[rdvue]',
  Success: '[rdvue]',
};
