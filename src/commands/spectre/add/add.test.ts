import { expect, test } from '@oclif/test';
import { SPECTRE_CLI_COMMANDS } from '../../../lib/constants.js';

describe(`${SPECTRE_CLI_COMMANDS.AddModule} module`, () => {
  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.AddModule])
    .it(`runs frontier ${SPECTRE_CLI_COMMANDS.AddModule} --help`, ctx => {
      expect(ctx.stdout).to.contain('frontier add <command>');
    });

  test
    .stdout()
    .command([SPECTRE_CLI_COMMANDS.PoorHelpCommand])
    .it(`runs poorly formatted spectre ${SPECTRE_CLI_COMMANDS.AddModule} -help command`, ctx => {
      expect(ctx.stdout).to.contain(`command not found: ${SPECTRE_CLI_COMMANDS.PoorHelpCommand}`);
    });
});
