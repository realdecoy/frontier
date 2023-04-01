import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';

describe(`${VUE_CLI_COMMANDS.PluginLibrary} --help`, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.PluginLibrary])
    .it(`runs frontier ${VUE_CLI_COMMANDS.PluginLibrary} --help`, ctx => {
      expect(ctx.stdout).to.contain('npx frontier plugin <feature>');
    });
});
