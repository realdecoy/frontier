/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'mob-hello-world';
// const badProjectName = '$testProject@project';

describe(MOBILE_CLI_COMMANDS.CreateProject, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName])
    .it(`runs ${MOBILE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${testProjectName} is ready!`);
    });

  test
    .stdout()
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir('../'))
    .it(`runs ${MOBILE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain('[frontier] you are already in an existing mobile project');
    });

  // test
  //   .stdout()
  //   .command([MOBILE_CLI_COMMANDS.CreateProject, badProjectName])
  //   .it('tries to run create project with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${MOBILE_CLI_COMMANDS.CreateProject} not found`);
  //   });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
  });
});
