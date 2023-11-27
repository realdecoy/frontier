import { expect, test } from '@oclif/test';
import { MOBILE_CLI_COMMANDS } from '../../../lib/constants.js';

describe(`${MOBILE_CLI_COMMANDS.PluginLibrary} module`, () => {
  test
    .stdout()
    .command([MOBILE_CLI_COMMANDS.PluginLibrary])
    .it(`runs mobile ${MOBILE_CLI_COMMANDS.PluginLibrary} --help`, ctx => {
      expect(ctx.stdout).to.contain('npx mobile plugin:<library>');
    });
});
