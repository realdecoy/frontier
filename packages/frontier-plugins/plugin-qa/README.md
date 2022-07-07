<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>


# Spectre

### @rdfrontier/plugin-qa
CLI to generate web automation projects

[![Version](https://img.shields.io/npm/v/rdspec.svg)](https://www.npmjs.com/package/@rdfrontier/plugin-qa)
[![Downloads/week](https://img.shields.io/npm/dw/rdspec.svg)](https://www.npmjs.com/package/@rdfrontier/plugin-qa)

&nbsp; &nbsp; &nbsp;

<!-- custom-toc -->

## Table of Contents

- [Usage](#usage)
- [Commands ](#options)
- [Dev Instructions](#Development)
- [Testing](#Testing)
<!-- custom-tocstop -->

&nbsp; &nbsp; &nbsp;

## Usage
 
<!-- custom-usage -->
Installing Spectre can be done with the command:
```bash
$ frontier plugins:install @rdfrontier/plugin-qa
```

The help menu can be accessed with the command:

```bash
frontier qa --help
```

The format for running an Spectre command is generally: 

```bash
frontier qa:COMMAND
```
<!-- custom-usagestop -->

&nbsp; &nbsp; &nbsp;


## Commands

[addd](#frontier-qacreate-screen-object-name)
<!-- custom-commands --> 

- [`frontier qa:create-mobile-project [NAME]`](#frontier-qa-create-mobile-project-name)
- [`frontier qa:create-page-object [NAME]`](#frontier-qa-create-page-object-name)
- [`frontier qa:create-project [NAME]`](#frontier-q-create-project-name)
- [`frontier qa:create-screen-object [NAME]`](#frontier-qacreate-screen-object-name)
- [`frontier qa:create-test [NAME]`](#frontier-qa-create-test-name)
- [`frontier qa --help [COMMAND]`](#frontier-qa-help-command)


### `frontier qa:create-mobile-project [NAME]`

Create a new WDIO project for Mobile

```
USAGE
  $ frontier qa:create-mobile-project [NAME]

ARGUMENTS
  NAME  Name of the project to be created

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/create-mobile-project/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-qa/src/commands/qa/create-mobile-project/index.ts)_

## `frontier qa:create-page-object [NAME]`

Create a new page object file

```
USAGE
  $ frontier qa:create-page-object [NAME]

ARGUMENTS
  NAME  Name of the page object file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ frontier qa:create-page-object
       Running this add command!
```

_See code:
[src/commands/create-page-object/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-qa/src/commands/qa/create-page-object/index.ts)_

## `frontier qa:create-project [NAME]`

Create a new WDIO project

```
USAGE
  $ frontier qa:create-project [NAME]

ARGUMENTS
  NAME  Name of the project to be created

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/create-project/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-qa/src/commands/qa/create-project/index.ts)_

## `frontier qa:create-screen-object [NAME]`

Create a new screen object file

```
USAGE
  $ frontier qa:create-screen-object [NAME]

ARGUMENTS
  NAME  Name of the page object file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ frontier qa:create-screen-object
       Running this add command!
```

_See code:
[src/commands/create-screen-object/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-qa/src/commands/qa/create-screen-object/index.ts)_

## `frontier qa:create-test [NAME]`

Create a new test file

```
USAGE
  $ frontier qa:create-test [NAME]

ARGUMENTS
  NAME  Name of the test file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ frontier qa:create-test
       <name-of-file-without-extension>
```

_See code:
[src/commands/create-test/index.ts](https://github.com/realdecoy/frontier/blob/main/packages/frontier-plugins/plugin-qa/src/commands/qa/create-test/index.ts)_

## `frontier qa:[COMMAND] --help `

display help for rdspec

```
USAGE
  $ frontier qa:[COMMAND]  --help 

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code:
[@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
