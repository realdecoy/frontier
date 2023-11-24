// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import { Args, Command, Flags } from '@oclif/core';

export default class Plugin extends Command {
  // static aliases = ['mobile plugin'];

  static description = 'install a plugin'

  static flags = {
    help: Flags.boolean({ hidden: false }),
  }

  static args = {
    // { name: 'buefy', description: 'lightweigth UI components for Vue.js', hidden: false },
    localization: Args.string({ name: 'localization', description: 'library for localizing content', hidden: false }),
    // { name: 'vuetify', description: 'material design framework for Vue.js', hidden: false },
    // { name: 'storybook', description: '[coming soon] UI component explorer for frontend devs', hidden: true },
  }

  showHelp(): void {
    const commandId = Plugin.id;
    const commandArgs = Object.values(Plugin.args);
    const commandFlags = Object.values(Plugin.flags);

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
    const { args, flags } = await this.parse(Plugin);
    const commandArgs = Object.values(args);

    this.handleHelp(commandArgs, flags);

    return Promise.resolve();
  }
}
