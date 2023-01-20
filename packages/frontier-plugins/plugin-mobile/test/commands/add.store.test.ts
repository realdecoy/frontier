/* global after */
import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../../src/lib/constants';
import { exec } from 'child_process';

const skipPresets = '--skipPresets';
const testProjectName = 'rdv-store-module-test';
const testStoreName = 'auth-store';
// const badStoreName = 'auth%20-2store';

describe(CLI_COMMANDS.AddStore, () => {
  test
    .stdout()
    .command([CLI_COMMANDS.AddStore])
    .it(`runs mobile ${CLI_COMMANDS.AddStore} ${testStoreName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[mobile] ${CLI_COMMANDS.AddStore} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .do(() => process.chdir(testProjectName))
    .command([CLI_COMMANDS.AddStore, testStoreName])
    .do(() => process.chdir('../'))
    .it(`runs mobile ${CLI_COMMANDS.AddStore} ${testStoreName}`, ctx => {
      expect(ctx.stdout).to.contain(`[mobile] store added: ${testStoreName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([CLI_COMMANDS.AddStore, badStoreName, skipPresets])
  //   .it('tries to run create store with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${CLI_COMMANDS.AddStore} not found`);
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
