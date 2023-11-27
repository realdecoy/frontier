import { expect, test } from '@oclif/test';
import { ADAM_CLI_COMMANDS } from '../../../lib/constants.js';

describe(`${ADAM_CLI_COMMANDS.WorldGalaxy}`, () => {
  test
    .stdout()
    .command([ADAM_CLI_COMMANDS.WorldGalaxy])
    .it(`runs frontier ${ADAM_CLI_COMMANDS.WorldGalaxy}`, ctx => {
      expect(ctx.stdout).to.contain('The Galaxy says Hello!');
    });
});
