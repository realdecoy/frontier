/* global after */
import { expect, test } from '@oclif/test';
import { SPECTRE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'test-test';
const testTestName = 'hello-world';
const { log } = console;

describe(SPECTRE_CLI_COMMANDS.AddTest, () => {
  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.AddTest])
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddTest} ${testTestName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${SPECTRE_CLI_COMMANDS.AddTest} command must be run in an existing spectre project`);
    });

  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([SPECTRE_CLI_COMMANDS.AddTest, testTestName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddTest} ${testTestName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] test added: ${testTestName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
