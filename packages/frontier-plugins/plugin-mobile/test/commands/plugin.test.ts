import { expect, test } from '@oclif/test';
import { CLI_COMMANDS } from '../../src/lib/constants';

describe(`${CLI_COMMANDS.PluginLibrary} module`, () => {
  test
    .stdout()
    .command([CLI_COMMANDS.PluginLibrary])
    .it(`runs mobile ${CLI_COMMANDS.PluginLibrary} --help`, ctx => {
      expect(ctx.stdout).to.contain('npx mobile plugin:<library>');
    });
});
