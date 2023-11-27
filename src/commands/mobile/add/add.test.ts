import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants.js';

describe(`${MOBILE_CLI_COMMANDS.AddModule} module`, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.AddModule])
    .it(`runs frontier ${MOBILE_CLI_COMMANDS.AddModule} --help`, ctx => {
      expect(ctx.stdout).to.contain('frontier add <command>');
    });

  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.PoorHelpCommand])
    .it(`runs poorly formatted mobile ${MOBILE_CLI_COMMANDS.AddModule} -help command`, ctx => {
      expect(ctx.stdout).to.contain(`command not found: ${MOBILE_CLI_COMMANDS.PoorHelpCommand}`);
    });
});
