# rdspec

CLI to generate web automation projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rdspec.svg)](https://npmjs.org/package/rdspec)
[![Downloads/week](https://img.shields.io/npm/dw/rdspec.svg)](https://npmjs.org/package/rdspec)
[![License](https://img.shields.io/npm/l/rdspec.svg)](https://github.com/OrandiH/rdspec/blob/master/package.json)

- [Usage](#usage)
- [Commands](#commands)

# Usage

```sh-session
$ npm install -g rdspec
$ rdspec COMMAND
$ rdspec --help`
```

# Commands

<!-- commands -->

- [`rdspec create-mobile-project [NAME]`](#rdspec-create-mobile-project-name)
- [`rdspec create-page-object [NAME]`](#rdspec-create-page-object-name)
- [`rdspec create-project [NAME]`](#rdspec-create-project-name)
- [`rdspec create-screen-object [NAME]`](#rdspec-create-screen-object-name)
- [`rdspec create-test [NAME]`](#rdspec-create-test-name)
- [`rdspec help [COMMAND]`](#rdspec-help-command)

## `rdspec create-mobile-project [NAME]`

Create a new WDIO project for Mobile

```
USAGE
  $ rdspec create-mobile-project [NAME]

ARGUMENTS
  NAME  Name of the project to be created

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/create-mobile-project/index.ts](https://github.com/realdecoy/rdspec/blob/v0.2.4/src/commands/create-mobile-project/index.ts)_

## `rdspec create-page-object [NAME]`

describe the command here

```
USAGE
  $ rdspec create-page-object [NAME]

ARGUMENTS
  NAME  Name of the page object file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ rdspec create-page-object
       Running this add command!
```

_See code:
[src/commands/create-page-object/index.ts](https://github.com/realdecoy/rdspec/blob/v0.2.4/src/commands/create-page-object/index.ts)_

## `rdspec create-project [NAME]`

Create a new WDIO project

```
USAGE
  $ rdspec create-project [NAME]

ARGUMENTS
  NAME  Name of the project to be created

OPTIONS
  -h, --help  show CLI help
```

_See code:
[src/commands/create-project/index.ts](https://github.com/realdecoy/rdspec/blob/v0.2.4/src/commands/create-project/index.ts)_

## `rdspec create-screen-object [NAME]`

describe the command here

```
USAGE
  $ rdspec create-screen-object [NAME]

ARGUMENTS
  NAME  Name of the page object file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ rdspec create-screen-object
       Running this add command!
```

_See code:
[src/commands/create-screen-object/index.ts](https://github.com/realdecoy/rdspec/blob/v0.2.4/src/commands/create-screen-object/index.ts)_

## `rdspec create-test [NAME]`

Create a new test file

```
USAGE
  $ rdspec create-test [NAME]

ARGUMENTS
  NAME  Name of the test file to be created

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ rdspec create-test
       <name-of-file-without-extension>
```

_See code:
[src/commands/create-test/index.ts](https://github.com/realdecoy/rdspec/blob/v0.2.4/src/commands/create-test/index.ts)_

## `rdspec help [COMMAND]`

display help for rdspec

```
USAGE
  $ rdspec help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code:
[@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
