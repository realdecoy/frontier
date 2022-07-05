
<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# Frontier Standard Library

### @rdfrontier/stdlib
A collection of functions/logic that are written in pure JavaScript with limited
dependencies. These functions expose generic concepts available for use throughout any TypeScript or JavaScript project. 

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
$ yarn add --save--dev @rdfrontier/stdlib
```
or 

```sh
$ npm install --save--dev @rdfrontier/stdlib
```
&nbsp;
&nbsp;

## Usage

```sh
Eg: import { log } from '@rdfrontier/stdlib';
```


&nbsp;
&nbsp; 

## Options

| Name | Description  | 
| --- | ------------- | 
| **Type Guards**                       |                                              |
| @isBoolean(value: unknown)            | Cheacks if value is a boolean.               |
| @isNumber(value: unknown)             | Cheacks if value is a number.                |
| @isString(value: unknown)             | Cheacks if value is a string.                |
| @isNumberArray(value: unknown)        | Cheacks if value is a number array.          |
| @isStringArray(value: unknown)        | Cheacks if value is a string array.          |
| @toStringArray(value: unknown[])      | Converts an array to a string array.         |
| @isJsonString(value: string)          | Cheacks if a string value is a JSON string   |
| **Case Conversions**                  |                                              |
| @toKebabCase(value: string)           | Converts a string to a kebab case string.    |
| @toPascalCase(value: string)          | Converts an string to a pascal case string.  |
| **Email Validation**                  |                                              |
| @isValidEmail(email: string)          | Checks if a string is a valid email address. |
| **Color Validation**                  |                                              |
| @isValidHex(text: string)             | Checks if a string is a valid hex color.     |
| **Standard Output**                   |                                              |
| @log(message: any = '', ...args: any) | Prints a message to the console.             |
| **Object Setting**                    |                                              |
| @makeObjectReadOnly< T >(obj: T)      | Make an object readonly.                     |

&nbsp;
&nbsp;
