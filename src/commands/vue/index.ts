// eslint-disable-next-line unicorn/prefer-module
const chalk = require('chalk');
import { Args, Command, Flags } from '@oclif/core';

export default class Vue extends Command {
  static hidden = true;

  static description = 'Vue.js scaffolding';

  static flags = {
    help: Flags.help({ name: 'help', char: 'h', hidden: false }),
    isTopic: Flags.string({ name: 'isTopic', hidden: true }),
  }

  static args = {
    add: Args.string({ name: 'add', description: 'Add a feature to a project', hidden: false }),
    'create-project': Args.string({ name: 'create-project', description: 'Scaffold a new project', hidden: false }),
    plugin: Args.string({ name: 'plugin', description: 'Inject a utility to extend project functionality', hidden: false }),
    upgrade: Args.string({ name: 'upgrade', description: 'Specify the template version for a project', hidden: false }),
  }

  showHelp(): void {
    const commandId = Vue.id;
    const commandArgs = Object.values(Vue.args);
    const commandFlags = Object.values(Vue.flags);

    // parse argument config list
    const argsList = commandArgs
      .filter((arg: any) => !arg.hidden)
      .map((arg: any) => {
        const maxSpaces = 25;
        const numOfSpaces = maxSpaces - arg.name.length;

        return `\n\t    ${arg.name}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${arg.description}`;
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
            ${chalk.yellow('frontier')} ${chalk.green(commandId)}  <command>

        Commands:${argsList}

        Options:${optionList}
    `);
  }

  async run(): Promise<void> {
    const { args } = await this.parse(Vue);
    const commandArgs = Object.values(args);

    if (commandArgs.length === 0) {
      this.showHelp();
    }

    return Promise.resolve();
  }
}
