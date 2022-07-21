<<<<<<<< HEAD:packages/frontier-plugins/plugin-shared/src/catch/index.ts
import { isJsonString, log } from '@rdfrontier/stdlib';
========
import { isJsonString } from '@rdfrontier/stdlib/src';
import { CLI_STATE } from '../../../utils/constants';
>>>>>>>> 74a8f78 (build: plugin-shared folder - updated, plugin-vue and plugin-qa updated to use plugin-shared):packages/frontier-plugins/plugin-sharedtest/src/functions/vue-functions/catch/index.ts
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