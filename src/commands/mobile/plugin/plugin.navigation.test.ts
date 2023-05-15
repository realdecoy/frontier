/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const withNavigation = '--withNavigation';
const testProjectName = 'mob-plugin-navigation-test';

describe(MOBILE_CLI_COMMANDS.PluginNavigation, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.PluginNavigation])
    .it(`runs mobile ${MOBILE_CLI_COMMANDS.PluginNavigation} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.PluginNavigation} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName, withNavigation])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.PluginNavigation])
    .do(() => process.chdir('../'))
    .it(`runs mobile ${MOBILE_CLI_COMMANDS.PluginNavigation}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] plugin added: ${MOBILE_CLI_COMMANDS.PluginNavigation.split(':')[1]}`);
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
