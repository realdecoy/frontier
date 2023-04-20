// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Dotnet extends Command {
  static hidden = false;

  static description = 'Dotnet API scaffolding';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
    isTopic: Flags.string({ name: 'isTopic', hidden: true }),
  }

  static args = {
    'create-project': Args.string({ name: 'create-project', description: 'Scaffold a new dotnet API project', hidden: false }),
    add: Args.string({ name: 'add', description: 'add a module to a project', hidden: false }),
    migrate: Args.string({ name: 'migrate', description: 'manage migrations for a database', hidden: false }),
  }

  showHelp(): void {
    const commandId = Dotnet.id;
    const commandArgs = Object.values(Dotnet.args);
    const commandFlags = Object.values(Dotnet.flags);

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
    const { args } = await this.parse(Dotnet);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
