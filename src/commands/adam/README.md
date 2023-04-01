# Adam  

`Adam` has been provided to allow for easier development. This template provides the basic structure needed to develop a simple frontier-based namespace. It also provides sample commands and tests to get you started..

&nbsp; &nbsp; &nbsp;

<!-- custom-toc -->
## Table of Contents

* [Usage](#usage)
* [Files](#files)
* [Testing](#testing)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;

## Usage
<!-- custom-usage -->
Copy the `/src/commands/adam` folder and rename as needed to support your new frontier namespace. Follow the folder and file structure create commands, topics and tests for your namespace.

```bash
npm install --global @realdecoy/frontier
frontier adam <command>
```
or
```bash
npx @realdecoy/frontier adam <command>
```

The help menu can be accessed with the command:

```bash
frontier adam --help
```

&nbsp;
&nbsp;
&nbsp;

<!-- custom-usagestop -->

## Options
```txt
Usage:
  frontier adam <command>

Commands:
    hello            -  say hello
    world            -  say hello to the world
  
Options:
    --help           -  Show help information
```

&nbsp;
&nbsp;
&nbsp;

## Files
```
adam
├── hello
│   ├── hello.test.ts
│   └── index.ts
├── world
│   ├── world.test.ts
│   └── index.ts
├── index.ts
└── README.md
```

`./hello` - example of a command folder

`./hello/hello.test.ts` - test file for `hello` command

`./hello/index.ts` - configuration and execution logic for the `hello` command

`./world` - example of a command folder (with nested commands)

`./world/index.ts` - configuration and execution logic for the `world` command

`./world/galaxy.test.ts` - test file for `world galaxy` command

`./world/world.test.ts` - test file for `world` command

`./world/galaxy.ts` - configuration and execution logic for the `world galaxy` command

`./index.ts` - namespace configuration and descriptor for shorthand help menu

`./README.md` - repository specific documentation for the namespace

&nbsp;
&nbsp;
&nbsp;

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
