import { isJsonString } from '@rdfrontier/stdlib';
import { CLI_STATE } from 'utils/constants';
const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
];

// override Command class error handler
export default function catchFunction(error:Error): Promise<any> {
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
        console.log(`${CLI_STATE.Error} ${customErrorMessage}`);
      } else {
        throw new Error(customErrorMessage);
      }
  
      return Promise.resolve();
}