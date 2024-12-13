/* global after */
import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-plugin-sentry-test';
const testProjectName2 = 'rdv-plugin-sentry-test-2';

describe(VUE_CLI_COMMANDS.PluginSentry, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.PluginSentry])
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginSentry} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.PluginSentry} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName2, skipPresets, isTest])
    .do(() => process.chdir(testProjectName2))
    .command([VUE_CLI_COMMANDS.PluginSentry, isTest])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginSentry}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] plugin added: ${VUE_CLI_COMMANDS.PluginSentry.split(' ')[1]}`);
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
