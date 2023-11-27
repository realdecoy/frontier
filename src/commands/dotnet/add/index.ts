// eslint-disable-next-line unicorn/prefer-module
import chalk from 'chalk';
import { Args, Command, Flags } from '@oclif/core';
import { CLI_STATE } from '../../../lib/constants.js';
import { isJsonString } from '../../../lib/utilities.js';

const CUSTOM_ERROR_CODES = new Set([
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
]);

export default class Add extends Command {
  // static aliases = ['dotnet add'];

  static description = 'add a new module';

  static flags = {
    help: Flags.boolean({ name: 'help', description: 'Show help information ', hidden: false }),
  }

  static args = {
    endpoint: Args.string({ name: 'layout', description: 'API project endpoint folder & sample route', hidden: false }),
    query: Args.string({ name: 'query', description: 'application query class, handler & validator', hidden: false }),
    command: Args.string({ name: 'command', description: 'application command class, handler & validator', hidden: false }),
    entity: Args.string({ name: 'entity', description: 'database model', hidden: false }),
    configuration: Args.string({ name: 'configuration', description: 'database configuration', hidden: false }),
  }

  // override Command class error handler
  catch(error: Error): Promise<any> {
    const errorMessage = error.message;
    const isValidJSON = isJsonString(errorMessage);
    const parsedError = isValidJSON ? JSON.parse(errorMessage) : {};
    const customErrorCode = parsedError.code;
    const customErrorMessage = parsedError.message;
    const hasCustomErrorCode = customErrorCode !== undefined;
    const hasNonExistentFlagError = errorMessage.includes('Nonexistent flag');

    if (hasNonExistentFlagError) {
      this.log(`${CLI_STATE.Error} Flag not found. See more with --help`);
    } else if (!hasCustomErrorCode) {
      // throw cli errors to be handled globally
      throw errorMessage;
    } else if (CUSTOM_ERROR_CODES.has(customErrorCode)) { // handle errors thrown with known error codes
      this.log(`${CLI_STATE.Error} ${customErrorMessage}`);
    } else {
      throw new Error(customErrorMessage);
    }

    return Promise.resolve();
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
