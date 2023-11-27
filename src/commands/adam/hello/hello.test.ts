import { expect, test } from '@oclif/test';
import { ADAM_CLI_COMMANDS } from '../../../lib/constants.js';

describe(`${ADAM_CLI_COMMANDS.Hello}`, () => {
  test
    .stdout()
    .command([ADAM_CLI_COMMANDS.Hello])
    .it(`runs frontier ${ADAM_CLI_COMMANDS.Hello} --help`, ctx => {
      expect(ctx.stdout).to.contain('Adam says Hello!');
    });
});
