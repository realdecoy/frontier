
import { isJsonString, log } from '@rdfrontier/stdlib';
// import process from 'process';
// import util from 'util';

const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file', 
  'missing-template-folder',
];


/**
 * Description: custom catch function to override the command class error handler.
 * @param {Error} error - 
 * @returns {Promise<void>} - 
 */
// override Command class error handler
export function catchError(error:Error, CLI_STATE:{Info: string, Error: string, Warning: string, Success: string}): Promise<any> {
  const errorMessage = error.message;
  const isValidJSON = isJsonString(errorMessage);
  const parsedError = isValidJSON ? JSON.parse(errorMessage) : {};
  const customErrorCode = parsedError.code;
  const customErrorMessage = parsedError.message;
  const hasCustomErrorCode = customErrorCode !== undefined;
  
  if (hasCustomErrorCode === false) {
      // throw cli errors to be handled globally 
      throw errorMessage;
    }

    // handle errors thrown with known error codes
    if (CUSTOM_ERROR_CODES.includes(customErrorCode)) {
      log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
}


// /**
//  * Emulates the log method from `@oclif/command`, since they don't seem to be
//  * offering any alternatives. Can be replaced with another logging library.
//  * @param {any} message The content to print to the console
//  * @param {Array<any>} args See {@link https://google.com util.format} for formatting arguments.
//  */
// export function log(message: any = '', ...args: any[]): void {
//   message = typeof message === 'string' ? message : util.inspect(message)
//   process.stdout.write(`${util.format(message, ...args)}\n`)
// }

// /**
//  * Description: Determine if string is valid JSON string
//  * @param {string} value - a string literal
//  * @returns {boolean} - True if string is valid qualified JSON
//  */
//  export function isJsonString(value: string): boolean {
//   try {
//     JSON.parse(value);
//   } catch (error) {
//     return false;
//   }

//   return true;
// }