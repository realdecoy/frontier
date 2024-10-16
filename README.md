<p align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
</p>

# Frontier  

[Frontier](https://github.com/realdecoy/frontier),  Bringing a new frontier to software engineering. 

Frontier brings together engineering standards across disciplines for ease of use, promoting consistent software development.<br />
 

Contributions are welcome! You can help us by reporting or fixing bugs and giving us feedback on new/existing features.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@realdecoy/frontier.svg)](https://npmjs.org/package/@realdecoy/frontier)
[![Downloads/week](https://img.shields.io/npm/dw/@realdecoy/frontier.svg)](https://npmjs.org/package/@realdecoy/frontier)
[![License](https://img.shields.io/npm/l/@realdecoy/frontier.svg)](https://github.com/realdecoy/@realdecoy/frontier/blob/main/package.json)

&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc -->
## Table of Contents

* [Usage](#usage)
* [Options](#options)
* [Documentation](http://frontier.realdecoy.com/)
* [Dev Instructions](#development)
* [Testing](#testing)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;

## Usage
<!-- custom-usage -->

```bash
npm install --global @realdecoy/frontier
frontier <namespace> <command>
```
or
```bash
npx @realdecoy/frontier <namespace> <command>
```
> namespaces are optional if running frontier commands in an existing frontier project

The help menu can be accessed with the commands:

```bash
frontier --help
frontier <namespace> --help
```
The current version of frontier can be retrieved with the command:

```bash
frontier --version
```
<!-- custom-usagestop -->

&nbsp;
&nbsp;
&nbsp;

## Options
```txt
Usage:
  frontier <namespace>

Namespaces:
    dotnet           -  Dotnet API Scaffolding
    mobile           -  React Native Scaffolding
    vue              -  Vue.js Scaffolding
  
Options:
    --help           -  Show help information
    --version        -  Show cli version
```


&nbsp;
&nbsp;
&nbsp;

## Namespaces

| Name | Namespace | Status | More Information
| --- | --- | --- | --- |
| .Net       | `dotnet` | Ready | [ Read More ](https://github.com/realdecoy/frontier/tree/development/src/commands/dotnet) |
| Infrastructure | `iac`| Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Mobile     | `mobile` | Ready    | [ Read More ](https://github.com/realdecoy/frontier/tree/development/src/commands/mobile) |
| QA         | `qa` | Technical Proposal    | [ Read More ](https://github.com/realdecoy/frontier) |
| Vue        | `vue` | Ready                 | [ Read More ](https://github.com/realdecoy/frontier/tree/development/src/commands/vue) |

&nbsp;
&nbsp;
&nbsp;

## Development

### Prerequisites & Recommendations

| Name | Description | More Information
| ---- | ----------- | --------------- |
| node | runtime     | version 19.8.1  |
| yarn | dependency management | version 1.22.19  |
| vscode | code editor | version 1.77.1  |

&nbsp;
&nbsp;
&nbsp;

### Install Dependencies
```bash
yarn install
```
or
```bash
npm install
```

### Execute CLI commands
```bash
./bin/dev <namespace> <command>
```
e.g.
```bash
$ ./bin/dev vue create-project
? Enter a project name:  » my-rdvue-project
```
### Building

#### Build
The build command rebuilds all packages and notify the user of the success of the packages being rebuilt.
To build the packages of frontier, run the command:

```bash
yarn run build
```
or 
```bash
npm run build
```

&nbsp; &nbsp; &nbsp;


#### Rebuild
Rebuilding the frontier packages automatically reconstructs the packages forgetting about any previous compilation of them.
To rebuild the frontier packages, run the command:

```bash
yarn run rebuild
```
or 
```bash
npm run rebuild
```

&nbsp; &nbsp; &nbsp;

## Creating a frontier namespace
#### [Adam](https://github.com/realdecoy/frontier/tree/development/commands/adam)
To support the creation of new frontier-based namespaces a template, [Adam](https://github.com/realdecoy/frontier/tree/development/src/commands/adam), has been provided to allow for easier development. This template provides the basic structure needed to develop a simple frontier-based namespace. It also provides sample commands and tests to get you started. 

&nbsp; &nbsp; &nbsp;

## Testing

### Run Unit Test Suite
```bash
yarn run test
```
or
```bash
npm run test
```

### Creating Tests
- create a ```<module-name>.test.ts``` file in the respective folder
- using ```chai``` assertion syntax, describe your unit test cases
- visit the oclif [testing documentation](https://oclif.io/docs/testing) to see more details

&nbsp; &nbsp; &nbsp;

## Contribution Instructions 
### Testing Requirements
All code contributions made to this repository must be properly tested. Jest is the testing framework that is used. All test files must be written with the extension ".spec.ts", to maintain the consistency of this project.

### GitHub Commits 
All commits made to this repository should be written according to the [Conventional Commit Messages Standard](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13). This is to ensure that consistency is maintained throughout the repository. 

### Pull Request
When creating a pull request ensure that the request is well documented and the changes made to the repository have been properly noted. Ensure to link the issue number(s) that the pull request satisfies.
