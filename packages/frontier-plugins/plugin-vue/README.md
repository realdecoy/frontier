<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# RDVue [![npm version](https://badge.fury.io/js/rdvue.svg)](https://badge.fury.io/js/rdvue)

[RDVue](https://github.com/realdecoy/rdvue) is an opinionated CLI for generating
Vue.js projects. We do so by adopting a development style guide which enforces
strong typing with TypeScript, standardized Component, Layout and Page models,
and a data-layer design promoting unified consumption through Stores and
Services.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rdvue.svg)](https://npmjs.org/package/rdvue)
[![Downloads/week](https://img.shields.io/npm/dw/rdvue.svg)](https://npmjs.org/package/rdvue)
[![License](https://img.shields.io/npm/l/rdvue.svg)](https://github.com/realdecoy/rdvue/blob/main/package.json)

&nbsp; &nbsp; &nbsp;

<!-- custom-toc -->

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Commands](#commands)
- [Documentation](https://realdecoy.github.io/rdvue/)
- [Dev Instructions](#Development)
- [Testing](#Testing)
<!-- custom-tocstop -->

&nbsp; &nbsp; &nbsp;

## About

The RDVue CLI is the product of RealDecoy's Frontend Practice group.
Contributions are welcome! You can help us by reporting or fixing bugs and
giving us feedback on new/existing features.

&nbsp; &nbsp; &nbsp;

## Usage

<!-- custom-usage -->
Installing RDVue can be done with the command:
```bash
$ frontier plugins:install @rdfrontier/plugin-vue
```

The help menu can be accessed with the command:

```bash
frontier vue --help
```

The format for running an RDVue command is generally: 

```bash
frontier vue:COMMAND
```
<!-- custom-usagestop -->

&nbsp; &nbsp; &nbsp;


## Commands

<!-- custom-commands --> 

- [`frontier vue:create-project [NAME]`](#frontier-vue-create-project-name)
- [`frontier vue:add:component [NAME]`](#frontier-vue-add-component-name)
- [`frontier vue:add:page [NAME]`](#frontier-vue-add-page-name)
- [`frontier vue:add:service [NAME]`](#frontier-vue-add-service-name)
- [`frontier vue:add:store [NAME]`](#frontier-vue-add-store-name)
- [`frontier vue:plugin [NAME]`](#frontier-vue-plugin-name)
- [`frontier vue:plugin:buefy `](#frontier-vue-plugin-buefy-name)
- [`frontier vue:plugin:localization `](#frontier-vue-plugin-localization-name)
- [`frontier vue:plugin:vuetify `](#frontier-vue-plugin-vuetify-name)
- [`frontier vue:upgrade [NAME]`](#frontier-vue-upgrade-name)


### `frontier vue:create-project [NAME] [PERSET]`

Create a RDVue project

```
USAGE
  $ frontier vue:create-project [NAME] [PRESET]

ARGUMENTS
  NAME  Name of project to be created
  PERSET Name of plugin preset

OPTIONS
  -h, --help  show CLI help

```

_See code:
[src/commands/create-project/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/create-project/index.ts)_

### `frontier vue:add:component [NAME]`

Add a new component module to project

```
USAGE
  $ frontier vue:add:component [NAME]

ARGUMENTS
  NAME  Name of new compnent

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add/component/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/add/component.ts)_


### `frontier vue:add:page [NAME]`

Add a new page module to project

```
USAGE
  $ frontier vue:add:page [NAME]

ARGUMENTS
  NAME  Name of the new page 

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ frontier vue:add:page
       Running this add command!
```

_See code:
[src/commands/add/page/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/add/page.ts)_


### `frontier vue:add:service [NAME]`

Add a new service module to project

```
USAGE
  $ frontier vue:add:service [NAME]

ARGUMENTS
  NAME  Name of new service

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add:service/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/add/service.ts)_

### `frontier vue:add:store [NAME]`

Add a new store module to project

```
USAGE
  $ frontier vue:add:store [NAME]

ARGUMENTS
  NAME  Name of new store module

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ frontier vue:add:store
       Running this add command!
```

_See code:
[src/commands/add/store/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/add/store.ts)_

### `frontier vue:plugin [NAME]`

Add a new plugin module to project

```
USAGE
  $ frontier vue:plugin [NAME]

ARGUMENTS
  BUEFY  Lightweigth UI components for Vue.js
  LOCALIZATION Adds i18bn localization
  VUETIFY lightweigth UI components for Vuejs

OPTIONS
  -h, --help  show CLI help

```


### `frontier vue:plugin:buefy`

Add lightweigth UI components for Vue.js

```
USAGE
  $ frontier vue:plugin:buefy

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/plugin/buefy/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/plugin/buefy.ts)_

### `frontier vue:plugin:localization`

Add i18bn localization to vue project

```
USAGE
  $ frontier vue:plugin:localization


OPTIONS
  -h, --help  show CLI help

```

_See code:
[src/commands/plugin/localization/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/plugin/localization.ts)_

### `frontier vue:plugin:vuetify`

Add lightweigth UI components for Vue.js

```
USAGE
  $ frontier vue:plugin:vuetify


OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/plugin/vuetify/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/plugin/vuetify.ts)_


## `frontier vue:upgrade [NAME]`

Specify the rdvue template version for a project

```
USAGE
  $ frontier vue:upgrade [NAME]

ARGUMENTS
  NAME  RDVue version to specify to

OPTIONS
  -h, --help  show CLI help

```

_See code:
[src/commands/upgrade/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-vue/src/commands/vue/upgrade/index.ts)_

<!-- custom-commandsstop -->

&nbsp; &nbsp; &nbsp;


## Development

```bash
npm install
npm link
```

&nbsp; &nbsp; &nbsp;

## Testing

### Run Unit Test Suite

```bash
npm run test
```

### Creating Tests

- create a `<module-name>.test.ts` file in the `/test` folder
- using `chai` assertion syntax, describe your unit test cases
- visit the oclif [testing documentation](https://oclif.io/docs/testing) to see
  more details
