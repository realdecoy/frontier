/* global after */
import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../../src/lib/constants';
import { exec } from 'child_process';

const testProjectName = 'rdv-hello-world';
const skipPresets = '--skipPresets';
// const badProjectName = '$testProject@project';

describe(CLI_COMMANDS.CreateProject, () => {
  test
    .stdout()
    .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .it(`runs ${CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[mobile] ${testProjectName} is ready!`);
    });

  test
    .stdout()
    .do(() => process.chdir(testProjectName))
    .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .do(() => process.chdir('../'))
    .it(`runs ${CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain('[mobile] you are already in an existing mobile project');
    });

  // test
  //   .stdout()
  //   .command([CLI_COMMANDS.CreateProject, badProjectName, skipPresets])
  //   .it('tries to run create project with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${CLI_COMMANDS.CreateProject} not found`);
  //   });

  after(() => {
    exec(`rm -r ${testProjectName}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
  });
});
