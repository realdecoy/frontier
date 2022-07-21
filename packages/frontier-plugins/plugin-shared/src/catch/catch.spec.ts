
import { catchError } from '.';
import chalk from 'chalk';

const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'missing-template-file',
  'missing-template-folder',
  'dependency-install-error',
];

const CLI_STATE = {
  Info: `${chalk.blue('[rdvue]')}`,
  Error: `${chalk.red('[rdvue]')}`,
  Warning: `${chalk.yellow('[rdvue]')}`,
  Success: `${chalk.green('[rdvue]')}`,
};

describe('test the catch function', () => {
  beforeEach(() => {
    jest.setTimeout(2000);
  });
 
  it("should pass if an error was thrown",  async function () {
    const errorMessage = "Random error message";
    try {
      const caught = await catchError(Error(errorMessage), CLI_STATE);
      expect(typeof(caught)).toBe(typeof(Promise));
  } catch (error) {
      expect(error).toContain(errorMessage);
  }
  })

  it("should pass if an error contains a custom error code",  async function () {
    const errorMessage = "code red project invalid";
    const errorCode = CUSTOM_ERROR_CODES[0];
    try {
      const caught = await catchError(Error(`{ "code": ${errorCode}, "message": ${errorMessage} }`), CLI_STATE);
      expect(typeof(caught)).toBe(typeof(Promise));
    } catch (error) {
      expect(error).toContain(errorCode);
      expect(error).toContain(errorMessage);
    }
  })

  it("should pass if an error does not contain a custom error code",  async function () {
    const errorMessage = "code red project invalid";
    const errorCode = "component-invalid";
    try {
      const caught = await catchError(Error(`{ "code": ${errorCode}, "message": ${errorMessage} }`), CLI_STATE);
      expect(typeof(caught)).toBe(typeof(Promise));
    } catch (error) {
      expect(error).toContain(errorCode);
      expect(error).toContain(errorMessage);
    }
    })
})


  
