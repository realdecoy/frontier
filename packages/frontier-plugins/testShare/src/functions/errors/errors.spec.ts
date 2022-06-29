/* global after */
import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../../utils/constants';

import { validityFailed } from '.'
import { checkProjectValidity } from '../../utils/utilities';


describe('test project validity check function', () => {
  beforeEach(() => {
    jest.setTimeout(20000) 
  });
  
  test
  .stdout()
  .it("should pass if a project-invalid error was thrown",  async function () {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    try {
      if (isValidProject === false) {
        validityFailed(CLI_COMMANDS.AddComponent);
      }
    } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      let invalidProject: errorStructure = JSON.parse(`${err}`);
      expect(invalidProject.code).equal('project-invalid')
      console.log(error)
    }
  })
})