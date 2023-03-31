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
npx @realdecoy/frontier <namespace> <command>
```
> namespaces are optional if running frontier commands in an existing frontier project

The help menu can be accessed with the command:

```bash
npx @realdecoy/frontier --help
```
The current version of frontier can be retrieved with the command:

```bash
npx @realdecoy/frontier --version
```
<!-- custom-usagestop -->

&nbsp;
&nbsp;
&nbsp;

## Options
```txt
Usage:
  npx @realdecoy/frontier <namespace> <command>

Namespaces:
    mobile           -  React Native Scaffolding
    vue              -  Vue.js Scaffolding

Commands:
    create-project   -  Scaffold a new project
    add              -  Add a feature to a project
    plugin           -  Inject a utility to extend project functionality
    upgrade          -  Specify the template version for a project
  
Options:
    --help           -  Show help information
    --version        -  Show cli version
```


&nbsp;
&nbsp;
&nbsp;

## Namespaces

| Name | Namespace | Alias | Status | More Information
| --- | --- | --- | --- | --- |
| .Net       | `plugin-dotnet` | dotnet | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Vue        | `plugin-vue`    | vue    | Ready                 | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-vue) |
| QA         | `plugin-qa`     | qa     | Technical Proposal    | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-qa) |
| Mobile     | `plugin-mobile` | mobile | Technical Proposal    | [ Read More ](https://github.com/realdecoy/frontier) |
| Infrastructure | `plugin-iac`| iac    | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |

&nbsp;
&nbsp;
&nbsp;

## Development

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
$ ./bin/dev vue create-project my-new-project
? Pick a preset:  » - Use arrow-keys. Return to submit.
>   Buefy & Localization (recommended)
    Vuetify & Localization
    [Skip presets]
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
Rebuilding the frontier packages automatically reconstructs the packages forgetting about any previous compliation of them.
To rebuild the frontier packages, run the command:

```bash
yarn run rebuild
```
or 
```bash
npm run rebuild
```

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
All code contributions made to this repository be properly tested. For testing the testing framework Jest is used. All test files must be writen with the extension ".spec.ts", to maintain the consistency of this project.

### GitHub Commits 
All commits maded to this repository be rewritten according to the [Conventional Commit Messages Standard](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13). This is to ensure that consistency is maintained throughout the repository. 

### Pull Request
When creating a pull request ensure that the request is well documented and the changes made to the repository have been properly noted. Ensure to link the issue number/s that the pull request satisfies.
