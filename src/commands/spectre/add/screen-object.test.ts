/* global after */
import { expect, test } from '@oclif/test';
import { SPECTRE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'screen-object-test';
const testScreenObjectName = 'hello-world';
const { log } = console;

describe(SPECTRE_CLI_COMMANDS.AddScreenObject, () => {
  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.AddScreenObject])
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddScreenObject} ${testScreenObjectName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${SPECTRE_CLI_COMMANDS.AddScreenObject} command must be run in an existing spectre project`);
    });

  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([SPECTRE_CLI_COMMANDS.AddScreenObject, testScreenObjectName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddScreenObject} ${testScreenObjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] screen object added: ${testScreenObjectName}`);
    });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        log(`error: ${error.message}`);
      }
    });
  });
});
