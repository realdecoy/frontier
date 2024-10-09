import { expect, test } from '@oclif/test';
import { ADAM_CLI_COMMANDS } from '../../../lib/constants';

describe(`${ADAM_CLI_COMMANDS.World}`, () => {
  test
    .stdout()
    .command([ADAM_CLI_COMMANDS.World])
    .it(`runs frontier ${ADAM_CLI_COMMANDS.World}`, ctx => {
      expect(ctx.stdout).to.contain('The World says Hello!');
    });
});
