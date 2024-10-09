import { Help } from '@oclif/core';
import { Topic } from '@oclif/core/lib/interfaces';
import chalk from 'chalk';
import { CLI_NAMESPACES } from './lib/constants';
import { log } from './lib/stdout';

export default class MyHelpClass extends Help {
  // display help for a command
  // eslint-disable-next-line require-await, @typescript-eslint/explicit-module-boundary-types
  async showCommandHelp(command: any): Promise<void> {
    // console.log(command);
    const commandId = command.id;
    const commandArgs = Object.values(command.args);
    const commandFlags = Object.values(command.flags);

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

        return `\n\t    --${flag.name} ${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${flag.name === 'help' ? 'Show help information' : flag.description}`;
      });

    const optionalNewline = `${commandArgs.length === 0 ? '' : '\n'}`;

    const message = `
        Usage:
            ${chalk.yellow('frontier')} ${chalk.green(commandId.replaceAll(':', ' '))} ${commandArgs.length > 0 ? chalk.blue('<command>') : ''}${optionalNewline}
        ${commandArgs.length > 0 ? 'Commands:' : ''}${argsList}${optionalNewline}
        Options:${optionList}
    `;

    log(message);
  }

  formatRoot(): string {
    return `
        Usage:
            ${chalk.yellow('frontier')} ${chalk.green('<namespace>')} <command>`;
  }

  // the formatting for a list of topics
  protected formatTopics(topics: Topic[]): string {
    // console.log(topics);
    const argsList = topics
      .filter((arg: any) => {
        return CLI_NAMESPACES.includes(arg.name);
      })
      .map((arg: any) => {
        const maxSpaces = 25;
        const numOfSpaces = maxSpaces - arg.name.length;

        return `\n\t    ${chalk.green(arg.name)}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${arg.description}`;
      });

    return `\tNamespaces:${argsList}`;
  }

  // the formatting for a list of commands
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types, no-unused-vars
  formatCommands(commands: any): string {
    // parse argument config list
    // console.log(JSON.parse(JSON.stringify(commands)));
    // const argsList = commands
    //   .filter((arg: any) => {
    //     const isHidden = arg.hidden;
    //     const isStrict = arg.strict;
    //     const commandId = arg.id;
    //     const levels = commands.filter((c: any) => c.id.includes(commandId)).length;
    //     const oneLevelDeep =  levels > 1;

    //     return (!isHidden && isStrict && oneLevelDeep);
    //   })
    //   .map((arg: any) => {
    //     const maxSpaces = 25;
    //     const numOfSpaces = maxSpaces - arg.id.length;

    //     return `\n\t    ${arg.id}${Array.from({ length: numOfSpaces + 1 }).join(' ')}- ${arg.description}`;
    //   });

    return `\tOptions:
    \t    --help     ${Array.from({ length: 14 }).join(' ')} - Show help information
    \t    --version  ${Array.from({ length: 14 }).join(' ')} - Show CLI version`;
  }
}
