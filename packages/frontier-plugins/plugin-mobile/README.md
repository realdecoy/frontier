<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# RDVue Mobile [![npm version](https://badge.fury.io/js/rdvue.svg)](https://badge.fury.io/js/rdvue)

[RDVue](https://github.com/realdecoy/rdmobile) is an opinionated CLI for generating Vue.js projects. We do so by adopting
a development style guide which enforces strong typing with TypeScript, standardized Component, Layout and Page models,
and a data-layer design promoting unified consumption through Stores and Services.



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rdvue.svg)](https://npmjs.org/package/rdvue)
[![Downloads/week](https://img.shields.io/npm/dw/rdvue.svg)](https://npmjs.org/package/rdvue)
[![License](https://img.shields.io/npm/l/rdvue.svg)](https://github.com/realdecoy/rdvue/blob/main/package.json)

&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc -->
## Table of Contents

* [Usage](#usage)
* [Options](#options)
* [Documentation](https://realdecoy.github.io/rdmobile/)
* [Dev Instructions](#Development)
* [Testing](#Testing)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;

## Usage
<!-- custom-usage -->

```bash
npx mobile [command]
```

The help menu can be accessed with the command:

```bash
npx mobile --help
```
The current version of mobile can be retrieved with the command:

```bash
npx mobile -v|--version|version
```
<!-- custom-usagestop -->

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

## About

The Mobile CLI is the product of RealDecoy's Frontend Practice group. Contributions are welcome! You can help us by reporting or fixing bugs and giving us feedback on new/existing features.

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
