/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const testProjectName = 'rdv-hello-world';
const skipPresets = '--skipPresets';
const isTest = '--isTest';
// const badProjectName = '$testProject@project';

describe(VUE_CLI_COMMANDS.CreateProject, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .it(`runs ${VUE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${testProjectName} is ready!`);
    });

  test
    .stdout()
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir('../'))
    .it(`runs ${VUE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain('[frontier] you are already in an existing frontier project');
    });

  // test
  //   .stdout()
  //   .command([VUE_CLI_COMMANDS.CreateProject, badProjectName, skipPresets])
  //   .it('tries to run create project with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${VUE_CLI_COMMANDS.CreateProject} not found`);
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
