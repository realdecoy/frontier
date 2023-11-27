/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-upgrade-test';
const { log } = console;

describe(VUE_CLI_COMMANDS.Upgrade, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.Upgrade])
    .it(`runs frontier ${VUE_CLI_COMMANDS.Upgrade} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.Upgrade} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.Upgrade, isTest])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.Upgrade}`, ctx => {
      expect(ctx.stdout).to.contain('frontier updated to version:');
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
