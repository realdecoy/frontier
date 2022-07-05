import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { toKebabCase } from '@rdfrontier/stdlib';
import { checkProjectValidity, parseStoreModuleName } from 'utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from 'utils/constants';
import { addElementFunction } from 'functions/addElement';
import { invalidProject } from '@rdfrontier/plugin-shared';
import catchFunction from 'functions/catch';

const TEMPLATE_FOLDERS = ['store'];

/**
 * Description: Class for creating a store module object.
 */
export default class StoreModule extends Command {
  static description = 'add a new Store module.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'name', description: 'name of new store module' },
  ]

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();

    // block command unless being run within an rdvue project
    if (isValidProject === false) {
        invalidProject(CLI_COMMANDS.AddStore, "rdvue");
    }

    const { args } = this.parse(StoreModule);

    // retrieve storeModule name
    const storeModuleName = await parseStoreModuleName(args);

    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, storeModuleName)

    this.log(`${CLI_STATE.Success} store added: ${toKebabCase(storeModuleName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Store)}\n`);
  }
}
