// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Plugin extends Command {
  static aliases = ['mobile plugin'];

  static description = 'install a plugin'

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
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
            npx ${chalk.blue('mobile')} ${commandId}:<library>

        Libraries: \t - Utilities to extend project functionality${argsList}    
        
        Options:${optionList}
    `);
  }

  run(): Promise<void> {
    this.showHelp();

    return Promise.resolve();
  }
}
