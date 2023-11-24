// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import { Command, Flags } from '@oclif/core';

export default class Galaxy extends Command {
  static hidden = false;

  static description = 'say hello to the galaxy';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
  }

  showHelp(): void {
    const commandId = Galaxy.id;
    const commandFlags = Object.values(Galaxy.flags);

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
    const { flags } = await this.parse(Galaxy);
    const commandFlags = Object.values(flags);
    const isHelp = commandFlags.includes('--help') || commandFlags.includes('-h');

    if (isHelp) {
      this.showHelp();
    } else {
      this.log(chalk.green('The Galaxy says Hello!'));
    }

    return Promise.resolve();
  }
}
