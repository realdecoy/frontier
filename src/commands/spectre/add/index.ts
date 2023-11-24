import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';

export default class Add extends Command {
  // static aliases = ['mobile add'];

  static description = 'add a new module'

  static flags = {
    help: Flags.boolean({ name: 'help', description: 'Show help information ', hidden: false }),
  }

  static args = {
    'page-object': Args.string({ name: 'page-object', description: 'page object file', hidden: false }),
  }

  showHelp(): void {
    const commandId = Add.id;
    const commandArgs = Object.values(Add.args);
    const commandFlags = Object.values(Add.flags);

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
    const { args, flags } = await this.parse(Add);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    return Promise.resolve();
  }
}
