/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'mob-auth-service-test';
const testServiceName = 'auth-service';
// const badServiceName = 'auth%20-2service';

describe(MOBILE_CLI_COMMANDS.AddService, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.AddService])
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddService} ${testServiceName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.AddService} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.AddService, testServiceName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddService} ${testServiceName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] service added: ${testServiceName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([MOBILE_CLI_COMMANDS.AddService, badServiceName])
  //   .it('tries to run create service with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${MOBILE_CLI_COMMANDS.AddService} not found`);
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
