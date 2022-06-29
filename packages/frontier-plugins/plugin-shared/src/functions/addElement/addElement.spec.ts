/* global after */
import { expect, test } from '@oclif/test';
import { exec } from 'child_process';

import { addElementFunction } from '.'
import { checkProjectValidity } from '../../utils/utilities';


// This test id not completed so it will not work
describe('test the catch function', () => {
  test
  .stdout()
  .it("should pass if template file missing error was thrown",  async function () {
    const testinput = 'an error was thrown';
    // const error = Error("This is an error")
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    const TEMPLATE_FOLDERS: string[] = ['component'];
    const args : {} = {name: "randomname"};
    
    try {
      await addElementFunction(TEMPLATE_FOLDERS, projectRoot, "component")
    } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      // let invalidProject: errorStructure = JSON.parse(`${err}`);
      expect(err).equal('missing-template-file')
    }
  })

})
