/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-plugin-localization-test';
const testProjectName2 = 'rdv-plugin-localization-test-2';

describe(VUE_CLI_COMMANDS.PluginLocalization, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.PluginLocalization])
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginLocalization} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.PluginLocalization} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName2, skipPresets, isTest])
    .do(() => process.chdir(testProjectName2))
    .command([VUE_CLI_COMMANDS.PluginLocalization, isTest])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginLocalization}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] plugin added: ${VUE_CLI_COMMANDS.PluginLocalization.split(' ')[1]}`);
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
