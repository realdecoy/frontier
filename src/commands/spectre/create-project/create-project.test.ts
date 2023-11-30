/* global after */
import { expect, test } from '@oclif/test';
import { SPECTRE_CLI_COMMANDS } from '../../../lib/constants.js';
import { exec } from 'node:child_process';

const testProjectName = 'spec-hello-world';
// const badProjectName = '$testProject@project';

describe(SPECTRE_CLI_COMMANDS.CreateProject, () => {
  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.CreateProject, testProjectName])
    .it(`runs ${SPECTRE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${testProjectName} is ready!`);
    });

  test
    .stdout()
    .do(() => process.chdir(testProjectName))
    .command([SPECTRE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir('../'))
    .it(`runs ${SPECTRE_CLI_COMMANDS.CreateProject} ${testProjectName}`, ctx => {
      expect(ctx.stdout).to.contain('[frontier] you are already in an existing spectre project');
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
