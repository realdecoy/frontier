/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-layout-test';
const testProjectName2 = 'rdv-layout-test2';
const testLayoutName = 'hello-world';

describe(VUE_CLI_COMMANDS.AddLayout, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddLayout])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddLayout} ${testLayoutName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.AddLayout} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName2, skipPresets, isTest])
    .do(() => process.chdir(testProjectName2))
    .command([VUE_CLI_COMMANDS.AddLayout, testLayoutName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddLayout} ${testLayoutName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] layout added: ${testLayoutName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
    exec(`shx rm -rf ${testProjectName2}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
  });
});
