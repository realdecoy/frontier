

# CLI Commands
--------------
This reference documents every command and flag available in Stripe’s command-line interface. The mobile CLI helps with scaffolfing project, components and other features right from the terminal.

## CLI Options

Run the CLI option below for a list of commands and options

**Usage**
```bash
$ npx mobile:<command> --help
```

| **Option**   | **Description**         |
| ------------ | :---------------------- |
| \--h, --help | Displays the help menu. |

___

## CLI Command

RDVue includes the following sub-commands:

| **Command**                       | **Description**                                  |
| --------------------------------- | :----------------------------------------------- |
| [create-project](#create-project) | Scaffold a new rdvue project                     |
| [add](#add)                       | Add a feature to a project                       |

* * *

### _create-project_

_create-project_ will scaffold a new project for you, using one of the presets selected from its interactive shell.

**Usage**
```bash
$ npx mobile:create-project <project-name>
```


 
| **Option**            | **Description**          |
| :---------------------| :----------------------- |
| --verbose             | Show debug logs when creating the project. |
| --bundleIdenifier     | The name of the unique identifier that will used for deployment to the App & Google play Store (eg. com.company.app). |

* * *

### _add_
Adds a feature to the project.

Usage
```bash
$ npx mobile:add:<feature> <name>
```
**Features**

Learn more below about each feature the CLI provides:

* [Component](features.md#components)
* [Page](features.md#pages)
* [Screen](features.md#screens)
* [Layout](features.md#layouts)
* [Service](features.md#services)
* [Store](features.md#stores)
