# Frontier - Vue  

`Frontier - Vue` is an opinionated CLI for generating Vue.js projects. We do so by adopting a development style guide which enforces strong typing with TypeScript, standardized Component, Layout and Page models, and a data-layer design promoting unified consumption through Stores and Services.

&nbsp; &nbsp; &nbsp;

<!-- custom-toc -->
## Table of Contents

* [Usage](#usage)
* [Options](#options)
* [Documentation](http://frontier.realdecoy.com/rdvue/getting-started/overview)
* [Dev Instructions](#development)
* [Testing](#testing)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;

## Usage
<!-- custom-usage -->

```bash
npx @realdecoy/frontier vue <command>
```
Global installation:

```bash
npm install --global @realdecoy/frontier
frontier vue <command>
```
The help menu can be accessed with the command:

```bash
frontier vue --help
```
<!-- custom-usagestop -->

&nbsp;
&nbsp;
&nbsp;

## Options
```txt
Usage:
  frontier vue <command>

Commands:
    create-project   -  Scaffold a new Vue project
    add              -  Add a module to a project
    plugin           -  Inject a utility to extend project functionality
    upgrade          -  Specify the template version for a project
  
Options:
    --help           -  Show help information
```


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
./bin/dev vue <command>
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
