/* eslint-disable max-lines */
import * as inquirer from 'inquirer';
import { Lookup } from '../modules';
import { CLI_STATE, TEMPLATE_TAG, PLUGIN_PRESET_LIST } from './constants';
import { getProjectRoot } from './files';

/**
 * Description: determine if string is valid JSON string
 * @param {string} value - a string value
 * @returns {boolean} -
 */
 function isJsonString(value: string): boolean {
    try {
      JSON.parse(value);
    } catch (error) {
      return false;
    }
  
    return true;
}


//CASE cONVERSIONS

/**
 * Description: convert a string to kebab case (e.g. my-project-name)
 * @param {string} value - a
 * @returns {string} - string value
 */
function toKebabCase(value: string): string {
    return value &&
      (value.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [''])
        .map(x => x.toLowerCase())
        .join('-');
}

/**
 * Description: convert a string to pascal case (e.g. myProjectName)
 * @param {string} value - a string value
 * @returns {string} -
 */
function toPascalCase(value: string): string {
    return value
      .split(/[-_ ]+/)
      .join(' ')
      .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase())
      .split(' ')
      .join('');
}
  