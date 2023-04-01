// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Mobile extends Command {
  static hidden = true;

  static description = 'React Native scaffolding';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  static args = {
    add: Args.string({ name: 'component', description: 'Add a new module', hidden: false }),
    create: Args.string({ name: 'create-project', description: 'Scaffold a new project', hidden: false }),
  }

  showHelp(): void {
    // const commandId = Mobile.id;
    const commandId = Mobile.id;
    const commandArgs = Object.values(Mobile.args);
    // const commandFlags = Object.values(Mobile.flags);

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
            npx ${chalk.yellow('@realdecoy/frontier')} ${chalk.green(commandId)} <command>

        Commands: ${argsList}
    `);
  }

  async run(): Promise<void> {
    const { args } = await this.parse(Mobile);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
