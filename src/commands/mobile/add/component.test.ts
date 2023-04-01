/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const testProjectName = 'mob-component-test';
const testComponentName = 'hello-world';
const { log } = console;

describe(MOBILE_CLI_COMMANDS.AddComponent, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.AddComponent])
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddComponent} ${testComponentName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.AddComponent} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.AddComponent, testComponentName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddComponent} ${testComponentName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] component added: ${testComponentName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
