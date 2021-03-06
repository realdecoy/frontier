/* global after */
import {expect, test} from '@oclif/test'
import { CLI_COMMANDS } from '../../src/utils/constants';
import { exec } from 'child_process';

const skipPresets = '--skipPresets';
const testProjectName = 'rdv-hello-world-test';
const testPageName = 'hello-world';
// const badPageName = 'he%20-2world';

describe(CLI_COMMANDS.AddPage, () => {
  test
    .stdout()
    .command([CLI_COMMANDS.AddPage])
    .it(`runs rdvue ${CLI_COMMANDS.AddPage} ${testPageName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[rdvue] ${CLI_COMMANDS.AddPage} command must be run in an existing rdvue project`);
    });

  test
    .stdout()
    .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .do(() => process.chdir(testProjectName))
    .command([CLI_COMMANDS.AddPage, testPageName])
    .do(() => process.chdir('../'))
    .it(`runs rdvue ${CLI_COMMANDS.AddPage} ${testPageName}`, ctx => {
      expect(ctx.stdout).to.contain(`[rdvue] page added: ${testPageName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([CLI_COMMANDS.AddPage, badPageName, skipPresets])
  //   .it('tries to run create page with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${CLI_COMMANDS.AddPage} not found`);
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
