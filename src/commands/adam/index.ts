// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class PluginVue extends Command {
  static hidden = true;

  static description = 'Vue.js scaffolding';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  static args = {
    add: Args.string({ name: 'add', description: 'Add a new module', hidden: false }),
    'create-project': Args.string({ name: 'create-project', description: 'Scaffold a new project', hidden: false }),
    plugin: Args.string({ name: 'plugin', description: 'Inject a utility to extend project functionality', hidden: false }),
    upgrade: Args.string({ name: 'upgrade', description: 'Specify the template version for a project', hidden: false }),
  }

  showHelp(): void {
    // const commandId = PluginVue.id;
    const commandAlias = PluginVue.aliases[0];
    const commandArgs = Object.values(PluginVue.args);
    // const commandFlags = Object.values(PluginVue.flags);

    // parse argument config list
    const argsList = commandArgs
      .filter(arg => !arg.hidden)
      .map(arg => {
        const maxSpaces = 15;
        const numOfSpaces = maxSpaces - arg.name.length;

        return `\n\t    ${arg.name}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${arg.description}`;
      });

    // parse option config list
    // const optionList = commandFlags
    //   .filter(flag => !flag.hidden)
    //   .map(flag => {
    //     const maxSpaces = 8;
    //     const numOfSpaces = maxSpaces - flag.name.length;

    //     return `\n\t    --${flag.name} | -${flag.char}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${flag.description}`;
    //   });

    this.log(`
        Usage:
            npx ${chalk.yellow('@realdecoy/frontier')} ${chalk.green(commandAlias)} <command>

        Commands: ${argsList}
    `);
  }

  async run(): Promise<void> {
    const { args } = await this.parse(PluginVue);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
