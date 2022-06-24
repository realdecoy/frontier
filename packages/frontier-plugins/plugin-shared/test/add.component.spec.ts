/* global after */
import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../src/utils/constants';
import { exec } from 'child_process';

import { validityFailed, addFunction } from '../src/functions/addelement'
import { checkProjectValidity } from '../src/utils/utilities';


describe('test project validity check function', () => {
  test
  .stdout()
  .it("should pass if a project-invalid error was thrown",  async function () {
    const testinput = 'an error was thrown';
    // const error = Error("This is an error")
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
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


//This test id not completed so it will not work
// describe('test the catch function', () => {
//   test
//   .stdout()
//   .it("should pass if template file missing error was thrown",  async function () {
//     const testinput = 'an error was thrown';
//     // const error = Error("This is an error")
//     const { isValid: isValidProject, projectRoot } = checkProjectValidity();
//     const TEMPLATE_FOLDERS: string[] = ['component'];
//     const args : {} = {name: "randomname"};
    
//     try {
//       addFunction(TEMPLATE_FOLDERS, args, projectRoot)
//     } catch (error) {
//       let err;
//       interface errorStructure {
//         code: string;
//         message: string;
//       }
//       if (error instanceof Error) err = error.message
//       let invalidProject: errorStructure = JSON.parse(`${err}`);
//       expect(invalidProject.code).equal('missing-template-file')
//     }
//   })

// })
