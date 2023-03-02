<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>
 
# RD Mobile

[RDVue Mobile](https://github.com/realdecoy/rdmobile) is an opinionated CLI for generating React Native projects. We do so by adopting a development style guide which enforces strong typing with TypeScript, standardized Component, Layout and Screen models,
and a data-layer design promoting unified consumption through React Contexts and Services.



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc -->
## Table of Contents

* [About](#about)
* [Usage](#usage)
* [Commands](#commands)
* [Options](#options)
* [Development](#development)
* [Dev Instructions](#Development)
* [Testing](#Testing)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;

## About

The RDVue mobile CLI is the product of RealDecoy's Frontend Mobile Practice Area. Contributions are welcome! You can help us by reporting or fixing bugs and giving us feedback on new/existing features.

## Usage
<!-- custom-usage -->
Installing the RDVue mobile plugin can be done with the following command:
```bash
$ frontier plugins:install @rdfrontier/plugin-mobile
```

The help menu can be accessed with the command:

```bash
frontier mobile --help
```
The current version of mobile can be retrieved with the command:

```bash
npx mobile -v | --version
```

The format for running an RDVue Mobile command is generally: 

```bash
frontier mobile:COMMAND
```
<!-- custom-usagestop -->

## Commands
<!-- custom-commands -->

- [`Create a RDVue Mobile project`](#create-a-rdvue-mobile-project)
- [`Add a new component module to project`](#add-a-new-component-module-to-project)
- [`Add a new screen module to project`](#add-a-new-screen-module-to-project)
- [`Add a new layout module to project`](#add-a-new-layout-module-to-project)
- [`Add a new service module to project`](#add-a-new-service-module-to-project)
- [`Add a new store module to project`](#add-a-new-store-module-to-project)



### Create a RDVue Mobile project

```bash
USAGE
  $ frontier mobile:create-project [NAME] [BUNDLE_IDENTIFIER]

ARGUMENTS
  NAME  Name of project to be created
  BUNDLE_IDENTIFIER  Bundle identifier of project to be created

OPTIONS
  -h, --help  show CLI help
  --verbose   Show verbose output

```

_See code:
[src/commands/mobile/create-project/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/create-project/index.ts)_


### Add a new component module to project


```bash
USAGE
  $ frontier mobile:add:component [NAME]

ARGUMENTS
  NAME  Name of new compnent

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add/component/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/add/component.ts)_


### Add a new screen module to project


```bash
USAGE
  $ frontier mobile:add:screen [NAME]

ARGUMENTS
  NAME  Name of the new screen 

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add/screen/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/add/screen.ts)_

### Add a new layout module to project


```bash
USAGE
  $ frontier mobile:add:layout [NAME]

ARGUMENTS
  NAME  Name of the new layout 

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add/screen/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/add/screen.ts)_


### Add a new service module to project


```bash
USAGE
  $ frontier mobile:add:service [NAME]

ARGUMENTS
  NAME  Name of new service

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add:service/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/add/service.ts)_



### Add a new store module to project


```bash
USAGE
  $ frontier mobile:add:store [NAME]

ARGUMENTS
  NAME  Name of new store module

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/add/store/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-mobile/src/commands/mobile/add/store.ts)_

&nbsp;
&nbsp;
&nbsp;

## Options
```txt
Usage:
  npx mobile <action>

Actions:
    create-project   -  Scaffold a new mobile project
    add              -  Add a feature to a project
    plugin           -  Inject a utility to extend project functionality
  
Options:
    --help | -h      -  Show help information
    --verbose        -  Show debug logs to get more information

```

&nbsp;
&nbsp;
&nbsp;

## Development

```bash
npm install
npm link
```

&nbsp;
&nbsp;
&nbsp;

## Testing

### Run Unit Test Suite
```bash
npm run test
```

### Creating Tests
- create a ```<module-name>.test.ts``` file in the ```/test``` folder
- using ```chai``` assertion syntax, describe your unit test cases
- visit the oclif [testing documentation](https://oclif.io/docs/testing) to see more details
