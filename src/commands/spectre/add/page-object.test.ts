/* global after */
import { expect, test } from '@oclif/test';
import { SPECTRE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'page-object-test';
const testPageObjectName = 'hello-world';
const { log } = console;

describe(SPECTRE_CLI_COMMANDS.AddPageObject, () => {
  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.AddPageObject])
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddPageObject} ${testPageObjectName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${SPECTRE_CLI_COMMANDS.AddPageObject} command must be run in an existing spectre project`);
    });

  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([SPECTRE_CLI_COMMANDS.AddPageObject, testPageObjectName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddPageObject} ${testPageObjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] page object added: ${testPageObjectName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
