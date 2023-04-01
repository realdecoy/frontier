// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class World extends Command {
  static hidden = false;

  static description = 'say hello to the world';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  static args = {
    galaxy: Args.string({ name: 'galaxy', description: 'say hello to the galaxy', hidden: false }),
  }

  showHelp(): void {
    const commandId = World.id;
    const commandArgs = Object.values(World.args);
    const commandFlags = Object.values(World.flags);

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
    const { flags } = await this.parse(World);
    const commandFlags = Object.values(flags);
    // const commandArgs = Object.values(args);
    const isHelp = commandFlags.includes('--help') || commandFlags.includes('-h');

    if (isHelp) {
      this.showHelp();
    } else {
      this.log(chalk.green('The World says Hello!'));
    }

    return Promise.resolve();
  }
}
