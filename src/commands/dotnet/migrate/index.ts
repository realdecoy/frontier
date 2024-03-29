// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Migrate extends Command {
  // static aliases = ['vue add'];

  static description = 'perform a migration action';

  static flags = {
    help: Flags.boolean({name:'help',description: 'Show help information ', hidden: false }),
  }

  static args = {
    new: Args.string({ name: 'new', description: 'new migration', hidden: false }),
    up: Args.string({ name: 'up', description: 'apply all migrations', hidden: false }),
    down: Args.string({ name: 'down', description: 'revert to a previous migration', hidden: false }),
    remove: Args.string({ name: 'remove', description: 'remove latest migration', hidden: false }),
  }

  showHelp(): void {
    const commandId = Migrate.id;
    const commandArgs = Object.values(Migrate.args);
    const commandFlags = Object.values(Migrate.flags);

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
            ${chalk.yellow('frontier')} ${chalk.green(commandId.split(':')[1])} ${chalk.blue('<command>')}

        Commands:${argsList}

        Options:${optionList}
    `);
  }

  handleHelp(args: (string | undefined)[], flags: {
      help: boolean;
  }): void {
    if (args.length === 0) { // Show help when arguments missing
      this.showHelp();
    } else if (flags.help === true) { // Exit execution which will show help menu for help flag
      this.exit(0);
    }
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Migrate);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    return Promise.resolve();
  }
}
