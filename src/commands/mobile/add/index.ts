import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';

export default class Add extends Command {
  static aliases = ['mobile add'];

  static description = 'add a new module'

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  static args = {
    component: Args.string({ name: 'component', description: 'component module', hidden: false }),
    screen: Args.string({ name: 'screen', description: 'screen module', hidden: false }),
    service: Args.string({ name: 'service', description: 'service module', hidden: false }),
    store: Args.string({ name: 'store', description: 'store module', hidden: false }),
    layout: Args.string({ name: 'layout', description: 'layout module', hidden: false }),
    cicd: Args.string({ name: 'cicd', description: 'CI/CD module', hidden: false }),
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

  async run(): Promise<void> {
    const { args } = await this.parse(Add);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
