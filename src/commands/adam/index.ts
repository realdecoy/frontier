// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Adam extends Command {
  static hidden = true;

  static description = 'Frontier namespace template';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  static args = {
    hello: Args.string({ name: 'hello', description: 'say hello', hidden: false }),
    world: Args.string({ name: 'world', description: 'say hello to the world', hidden: false }),
  }

  showHelp(): void {
    const commandId = Adam.id;
    const commandArgs = Object.values(Adam.args);
    const commandFlags = Object.values(Adam.flags);

    // parse argument config list
    const argsList = commandArgs
      .filter((arg: any) => !arg.hidden)
      .map((arg: any) => {
        const maxSpaces = 25;
        const numOfSpaces = maxSpaces - arg.name.length;

        return `\n\t    ${chalk.blue(arg.name)}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${arg.description}`;
      });

    // parse option config list
    const optionList = commandFlags
      .filter((flag: any) => !flag.hidden)
      .map((flag: any) => {
        const maxSpaces = 22;
        const numOfSpaces = maxSpaces - flag.name.length;

        return `\n\t    --${flag.name} ${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${flag.description}`;
      });

    this.log(`
        Usage:
            ${chalk.yellow('frontier')} ${chalk.green(commandId)} ${chalk.blue('<command>')}

        Commands:${argsList}

        Options:${optionList}
    `);
  }

  async run(): Promise<void> {
    const { args } = await this.parse(Adam);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
