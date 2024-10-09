import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const skipPresets = '--skipPresets';
const isTest = '--isTest';
const testProjectName = 'rdv-component-test';
const testProjectName2 = 'rdv-component-test-2';
const testComponentName = 'hello-world';
const { log } = console;

describe(VUE_CLI_COMMANDS.AddComponent, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddComponent])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddComponent} ${testComponentName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${VUE_CLI_COMMANDS.AddComponent} command must be run in an existing frontier project`);
    });

  test
    .stdout()
    .command([VUE_CLI_COMMANDS.CreateProject, testProjectName2, skipPresets, isTest])
    .do(() => process.chdir(testProjectName2))
    .command([VUE_CLI_COMMANDS.AddComponent, testComponentName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddComponent} ${testComponentName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] component added: ${testComponentName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
    exec(`shx rm -rf ${testProjectName2}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
