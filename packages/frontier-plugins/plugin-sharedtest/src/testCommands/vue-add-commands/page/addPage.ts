import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { parseModuleConfig } from 'utils/files';
import { checkProjectValidity, parsePageName, toKebabCase } from 'utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from 'utils/constants';
import catchFunction from 'functions/vue-functions/catch';
import { addElementFunction } from 'functions/vue-functions/addElement';
import { invalidProject } from '@rdfrontier/plugin-shared';

const TEMPLATE_FOLDERS = ['page'];

export default class Page extends Command {
  static description = 'add a new Page module.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'name', description: 'name of new page' },
  ]

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
    if (isValidProject === false) {
        invalidProject(CLI_COMMANDS.AddPage, "rdvue");
    }

    const { args } = this.parse(Page);
    const folderList = TEMPLATE_FOLDERS;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);

    // retrieve page name
    const pageName = await parsePageName(args);

    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, pageName)

    this.log(`${CLI_STATE.Success} page added: ${toKebabCase(pageName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Page)}\n`);
  }
}
