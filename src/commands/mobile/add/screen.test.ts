/* global after */
import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants';
import { exec } from 'node:child_process';

const testProjectName = 'mob-hello-world-test';
const testPageName = 'hello-world';
// const badPageName = 'he%20-2world';

describe(MOBILE_CLI_COMMANDS.AddScreen, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.AddScreen])
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddScreen} ${testPageName} (outside project)`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] ${MOBILE_CLI_COMMANDS.AddScreen} command must be run in an existing mobile project`);
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.CreateProject, testProjectName])
    .do(() => process.chdir(testProjectName))
    .command([MOBILE_CLI_COMMANDS.AddScreen, testPageName])
    .do(() => process.chdir('../'))
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddScreen} ${testPageName}`, ctx => {
      expect(ctx.stdout).to.contain(`[frontier] page added: ${testPageName}`);
    });

  // test
  //   .stdout()
  //   .do(() => process.chdir(testProjectName))
  //   .command([MOBILE_CLI_COMMANDS.AddScreen, badPageName])
  //   .it('tries to run create page with a poorly formatted command', ctx => {
  //     expect(ctx.stdout).to.contain(`Error: command ${MOBILE_CLI_COMMANDS.AddScreen} not found`);
  //   });

  after(() => {
    exec(`shx rm -rf ${testProjectName}`, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(`error: ${error.message}`);
      }
    });
  });
});
