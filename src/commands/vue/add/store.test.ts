/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-store-module-test';
const testStoreName = 'auth-store';
// const badStoreName = 'auth%20-2store';

describe(VUE_CLI_COMMANDS.AddStore, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddStore])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddStore} ${testStoreName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.AddStore} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.AddStore, testStoreName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddStore} ${testStoreName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] store added: ${testStoreName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([VUE_CLI_COMMANDS.AddStore, badStoreName, skipPresets])
  //   .it('tries to run create store with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${VUE_CLI_COMMANDS.AddStore} not found`);
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
