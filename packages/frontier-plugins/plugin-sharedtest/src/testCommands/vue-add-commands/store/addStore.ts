import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { parseModuleConfig } from 'utils/files';
import { checkProjectValidity, parseStoreModuleName, toKebabCase } from 'utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from 'utils/constants';
import catchFunction from 'functions/vue-functions/catch';
import { addElementFunction } from 'functions/vue-functions/addElement';
import { validityFailed } from '@rdfrontier/plugin-shared';

const TEMPLATE_FOLDERS = ['store'];
const CUSTOM_ERROR_CODES = [
  'project-invalid',
  'failed-match-and-replace',
  'missing-template-file',
  'missing-template-folder',
];

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
        validityFailed(CLI_COMMANDS.AddStore);
    }

    const { args } = this.parse(StoreModule);
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);

    // retrieve storeModule name
    const storeModuleName = await parseStoreModuleName(args);

    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, storeModuleName)

    this.log(`${CLI_STATE.Success} store added: ${toKebabCase(storeModuleName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Store)}\n`);
  }
}
