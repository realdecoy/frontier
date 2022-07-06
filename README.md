
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


Frontier offers a set of standard libraries and typing kits that can be use across engineering projects to allow for more consistency software development. With frontier, a set of plugins are available for use by developers which can be used to easily generate base project files contributing to a faster development process.   

Contributions are welcome! You can help us by reporting or fixing bugs and giving us feedback on new/existing features.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)


&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc -->
## Table of Contents

* [Installation](#install)
* [Addons](#addons)
* [Libraries](#libraries)
* [Options](#options)
* [Development Instructions](#Development)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;


## Components

###  Installation
```
yarn add -g @rdfrontier
```
or 

```
npm install -g @rdfrontier
```

### Addons

| Name | Package | Status | 
| --- | --- | --- |
| Backend           | `@rdfrontier/plugin-backend`      | Pre-Technical Proposal |
| Spring Boot       | `@rdfrontier/plugin-java`         | Pre-Technical Proposal |
| Javascript        | `@rdfrontier/plugin-js`           | Pre-Technical Proposal |
| .Net              | `@rdfrontier/plugin-dotnet`       | Pre-Technical Proposal |
| Frontend          | `@rdfrontier/plugin-frontend`     | Pre-Technical Proposal |
| Vue               | `@rdfrontier/plugin-vue`          | Ready                  |
| React             | `@rdfrontier/plugin-react`        | Pre-Technical Proposal |
| QA                | `@rdfrontier/plugin-qa`           | Ready                  |
| Mobile            | `@rdfrontier/plugin-mobile`       | Pre-Technical Proposal |
| React Native      | `@rdfrontier/plugin-react-native` | Technical Proposal     |
| Infrastructure    | `@rdfrontier/plugin-iac`          | Pre-Technical Proposal |

&nbsp;
&nbsp;

### Libraries

| Name | Package | Status | 
| --- | --- | --- |
| Frontier Standard Library  | `@rdfrontier/stdlib`      | Ready |
| Frontier TypeKit           | `@rdfrontier/typekit`       | Ready |

&nbsp;
&nbsp;
&nbsp;


### Package Installation Options
| Package | Description | 
| --- | --- |
| `@rdfrontier/typekit`             | Ready |
| `@rdfrontier/stdlib`              | Ready |
| `@rdfrontier/plugin-shared`       | Ready |
| `@rdfrontier/plugin-vue`          | Ready |
| `@rdfrontier/plugin-qa`           | Ready |

&nbsp;
&nbsp;
&nbsp;

### Package Installation Instructions 

#### [ Frontier Standard Library ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-libraries/stdlib)

```
yarn add --save--dev @rdfrontier/stdlib
```
or
```
npm install --save--dev @rdfrontier/stdlib
```

#### [Frontier TypeKit ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-libraries/typekit)

```
yarn add --save--dev @rdfrontier/typekit
```
or
```
npm install --save--dev @rdfrontier/typekit
```

#### [Frontier Plugin Shared Library ](https://github.com/realdecoy/frontier)

```
yarn add --save--dev @rdfrontier/plugin-shared
```
or
```
npm install --save--dev @rdfrontier/plugin-shared
```

#### [RDVue ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-vue)

```
yarn add --save--dev @rdfrontier/plugin-vue
```
or
```
npm install --save--dev @rdfrontier/plugin-vue
```

#### [Specture ](https://github.com/realdecoy/frontier/tree/main/packages/frontier-plugins/plugin-qa)

```
yarn add --save--dev @rdfrontier/plugin-qa
```
or
```
npm install --save--dev @rdfrontier/plugin-qa
```


&nbsp;
&nbsp; 
&nbsp;


### Development Instructions 

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


&nbsp;
&nbsp;
&nbsp;