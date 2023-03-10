/* global after */
import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../../src/lib/constants';
import { exec } from 'child_process';

const skipPresets = '--skipPresets';
const testProjectName = 'rdv-component-test';
const testComponentName = 'hello-world';
const { log } = console;

describe(CLI_COMMANDS.AddComponent, () => {
  test
    .stdout()
    .command([CLI_COMMANDS.AddComponent])
    .it(`runs mobile ${CLI_COMMANDS.AddComponent} ${testComponentName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[mobile] ${CLI_COMMANDS.AddComponent} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
    .do(() => process.chdir(testProjectName))
    .command([CLI_COMMANDS.AddComponent, testComponentName])
    .do(() => process.chdir('../'))
    .it(`runs mobile ${CLI_COMMANDS.AddComponent} ${testComponentName}`, ctx => {
      expect(ctx.stdout).to.contain(`[mobile] component added: ${testComponentName}`);
    });

  after(() => {
    exec(`rm -r ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
