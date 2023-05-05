/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const withSentry = '--withSentry';
const testProjectName = 'mob-plugin-localization-test';

describe(MOBILE_CLI_COMMANDS.PluginSentry, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.PluginSentry])
    .it(`runs mobile ${MOBILE_CLI_COMMANDS.PluginSentry} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.PluginSentry} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName, withSentry])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.PluginSentry])
    .do(() => process.chdir('../'))
    .it(`runs mobile ${MOBILE_CLI_COMMANDS.PluginSentry}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] plugin added: ${MOBILE_CLI_COMMANDS.PluginSentry.split(':')[1]}`);
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
