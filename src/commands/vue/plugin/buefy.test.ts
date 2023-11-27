/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-plugin-buefy-test';

describe(VUE_CLI_COMMANDS.PluginBuefy, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.PluginBuefy])
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginBuefy} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.PluginBuefy} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets, isTest])
    .do(() => process.chdir(testProjectName))
    .command([VUE_CLI_COMMANDS.PluginBuefy, isTest])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginBuefy}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] plugin added: ${VUE_CLI_COMMANDS.PluginBuefy.split(' ')[1]}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
  });
});
