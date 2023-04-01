import { expect, test } from '@oclif/test';
import { VUE_CLI_COMMANDS } from '../../../lib/constants';

describe(`${VUE_CLI_COMMANDS.AddModule} --help`, () => {
  test
    .stdout()
    .command([VUE_CLI_COMMANDS.AddModule])
    .it(`runs frontier ${VUE_CLI_COMMANDS.AddModule} --help`, ctx => {
      expect(ctx.stdout).to.contain('npx frontier frontier add <feature>');
    });

  // test
  //   .stdout()
  //   .command([VUE_CLI_COMMANDS.PoorHelpCommand])
  //   .it(`runs poorly formatted frontier ${VUE_CLI_COMMANDS.AddModule} -help command`, ctx => {
  //     expect(ctx.error).to.contain(`Error: command ${VUE_CLI_COMMANDS.PoorHelpCommand} not found`);
  //   });
});
