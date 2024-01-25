/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-auth-service-test';
const testServiceName = 'auth-service';
// const badServiceName = 'auth%20-2service';

describe(VUE_CLI_COMMANDS.AddService, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddService])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddService} ${testServiceName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.AddService} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.AddService, testServiceName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddService} ${testServiceName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] service added: ${testServiceName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([VUE_CLI_COMMANDS.AddService, badServiceName, skipPresets])
  //   .it('tries to run create service with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${VUE_CLI_COMMANDS.AddService} not found`);
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
