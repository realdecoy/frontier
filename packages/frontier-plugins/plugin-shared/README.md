
<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# Frontier Plugin Shared Functions Library

### @rdfrontier/plugin-shared
A library of common functionalities utilized amongst the frontier plugins available. 


&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc --> 
## Table of Contents

* [Installation](#install)
* [Usage](#usage)
* [Options](#options)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Installation

```sh
$ yarn add @rdfrontier/plugin-shared
```

or 

```sh
$ npm install @rdfrontier/plugin-shared
```

&nbsp;
&nbsp;

## Usage

```sh
Eg: import { invalidProject } from '@rdfrontier/plugin-shared';
```


&nbsp;
&nbsp;

## Options

| Name | Description  | 
| --- | ------------- | 
| **Errors**                            |                                                |
| invalidProject(commandType: string, projectType: string)  | Throw error if project location is invalid.     |
| existingProject(projectType: string) | Throw error if project already exists.        |
|  fileNotChanged()                     | Throw error file has not been updated. <br /> |
| **Response**                          |                                              |
| successfulReplaceResponse(successfulReplace: boolean, elementName: string, elementType: string)           | Return response of whether file is ready for use or not.    |

&nbsp;
&nbsp;
