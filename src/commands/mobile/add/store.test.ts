/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const testProjectName = 'mob-store-module-test';
const testStoreName = 'auth-store';
// const badStoreName = 'auth%20-2store';

describe(MOBILE_CLI_COMMANDS.AddStore, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.AddStore])
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddStore} ${testStoreName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.AddStore} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.AddStore, testStoreName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddStore} ${testStoreName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] store added: ${testStoreName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([MOBILE_CLI_COMMANDS.AddStore, badStoreName])
  //   .it('tries to run create store with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${MOBILE_CLI_COMMANDS.AddStore} not found`);
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
