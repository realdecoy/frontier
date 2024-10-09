// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Command, Flags } from '@oclif/core';

export default class Hello extends Command {
  static aliases = ['adam hello'];

  static hidden = false;

  static description = 'say hello';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  showHelp(): void {
    const commandId = Hello.id;
    const commandFlags = Object.values(Hello.flags);

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
            ${chalk.yellow('frontier')} ${chalk.green(commandId)}}

        Options:${optionList}
    `);
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Hello);
    const commandFlags = Object.values(flags);
    const isHelp = commandFlags.includes('--help') || commandFlags.includes('-h');

    if (isHelp) {
      this.showHelp();
    } else {
      this.log(chalk.green('Adam says Hello!'));
    }

    return Promise.resolve();
  }
}
