
<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# Frontier  

[Frontier](https://github.com/realdecoy/frontier),  Bringing a new frontier to software engineering. 

Frontier brings together engineering standards across disciplines for ease of use, promoting consistent software development.<br />
 

Contributions are welcome! You can help us by reporting or fixing bugs and giving us feedback on new/existing features.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)


&nbsp; &nbsp; &nbsp;

<!-- custom-toc -->
## Table of Contents

* [Usage](#usage)
* [Bootstrapping](#bootstrapinghttpslernajsorgdocscore-conceptsbootstrapping)
* [Addons](#addons)
* [Libraries](#libraries)
* [Options](#options)
* [Development Instructions](#development-instructions)
* [Contributions](#contribution-instructions)
<!-- custom-tocstop -->

&nbsp; &nbsp; &nbsp;



## Usage
 
<!-- custom-usage -->
When using the frontier cli tool it is prefered that when runing commands `yarn` is used over `npm`. When `npm` is used some of the frontier's mono repositoy features may not work as they should so `yarn` is needed. Using `yarn` also allows for parallel installation of the frontier tool to take place. 
<!-- custom-usagestop -->

&nbsp; &nbsp; &nbsp;

#### [Bootstraping](https://lerna.js.org/docs/core-concepts/bootstrapping)
Bootstraping allows for the linking of different frontier packages so they an import and utilize each other without having to be published.
To bootstrap all frontier packages and their dependencies run the command:
```
npm run bootstrap 
```
or
```
yarn run bootstrap 
```

&nbsp; &nbsp; &nbsp;

#### [Type Checking](https://lerna.js.org/docs/core-concepts/bootstrapping)
Type checking, see the validation of the type of very variable in the code base.
To type check all frontier packages and their dependencies run the command:
```
npm run typecheck
```
or
```
yarn run typecheck
```

&nbsp; &nbsp; &nbsp;

## Components

### Addons

| Name | Package | Status | More Information
| --- | --- | --- | --- |
| Backend           | `@rdfrontier/plugin-backend`      | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Spring Boot       | `@rdfrontier/plugin-java`         | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Javascript        | `@rdfrontier/plugin-js`           | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| .Net              | `@rdfrontier/plugin-dotnet`       | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Frontend          | `@rdfrontier/plugin-frontend`     | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| Vue               | `@rdfrontier/plugin-vue`          | Ready                | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-vue) |
| React             | `@rdfrontier/plugin-react`        | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| QA                | `@rdfrontier/plugin-qa`           | Ready                  | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-qa) |
| Mobile            | `@rdfrontier/plugin-mobile`       | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |
| React Native      | `@rdfrontier/plugin-react-native` | Technical Proposal     | [ Read More ](https://github.com/realdecoy/frontier) |
| Infrastructure    | `@rdfrontier/plugin-iac`          | Pre-Technical Proposal | [ Read More ](https://github.com/realdecoy/frontier) |

&nbsp;
&nbsp;

### Libraries

| Name | Package | Status | More Information
| --- | --- | --- | --- |
| Frontier Standard Library  | `@rdfrontier/stdlib`      | Ready | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-libraries/stdlib) |
| Frontier TypeKit           | `@rdfrontier/typekit`       | Ready | [ Read More ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-libraries/typekit) |

&nbsp; &nbsp; &nbsp;



&nbsp;
&nbsp; 
&nbsp;


## Development Instructions 

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


### Testing

##### Run Unit Test Suites
Testing any piece of software created is critical for developers.
To test all frontier packages run the command:

```
npm run test:packages
```
or
```
yarn run test:packages
```

&nbsp; &nbsp; &nbsp;


### Nuking

#### Nuke
To nuke the packages of frontier, run the command:

```bash
yarn run nuke
```
or 
```bash
npm run nuke
```

&nbsp; &nbsp; &nbsp;


#### Nuke:artifacts
To nuke artifacts of the frontier packages, run the command:

```bash
yarn run nuke:artifacts
```
or 
```bash
npm run nuke:artifacts
```

&nbsp; &nbsp; &nbsp;

### Creating a frontier based project
#### [Adam](https://github.com/realdecoy/frontier/tree/main/templates/adam)
To support the creation of new frointer-based projects a template, [Adam](https://github.com/realdecoy/frontier/tree/main/templates/adam), has been provided to allow for easier development. This template provides the basic structure needed to develop a simple frontier-based project. 


## Contribution Instructions 
### Testing Requirements
All code contributions made to this repository be properly tested. For testing the testing framework Jest is used. All test files must be writen with the extension ".spec.ts", to maintain the consistency of this project.

### GitHub Commits 
All commits maded to this repository be rewritten according to the [Conventional Commit Messages Standard](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13). This is to ensure that consistency is maintained throughout the repository. 

### Pull Request
When creating a pull request ensure that the request is well documented and the changes made to the repository have been properly noted. Ensure to link the issue number/s that the pull request satisfies. 
