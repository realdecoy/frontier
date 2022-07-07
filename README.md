
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

* [About](#about)
* [Usage](#install)
* [Addons](#addons)
* [Libraries](#libraries)
* [Options](#options)
* [Development Instructions](#Development)
<!-- custom-tocstop -->

&nbsp; &nbsp; &nbsp;


## About 

Frontier offers a set of standard libraries and typing kits that can be use across engineering projects to allow for more consistency software development. With frontier, a set of plugins are available for use by developers which can be used to easily generate base project files contributing to a faster development process.  

## Usage
 
<!-- custom-usage -->
The help menu can be accessed with the command:

```bash
frontier --help
```

The frontier version can be accessed with the command:

```bash
frontier --version
```
<!-- custom-usagestop -->

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


### Development Instructions 

#### Development

```bash
npm install
npm link
```

&nbsp; &nbsp; &nbsp;

#### Testing

##### Run Unit Test Suite

```bash
npm run test
```


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
