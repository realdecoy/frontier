/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-hello-world-test';
const testPageName = 'hello-world';
// const badPageName = 'he%20-2world';

describe(VUE_CLI_COMMANDS.AddPage, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddPage])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddPage} ${testPageName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.AddPage} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.AddPage, testPageName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddPage} ${testPageName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] page added: ${testPageName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([VUE_CLI_COMMANDS.AddPage, badPageName, skipPresets, isTest])
  //   .it('tries to run create page with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${VUE_CLI_COMMANDS.AddPage} not found`);
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
