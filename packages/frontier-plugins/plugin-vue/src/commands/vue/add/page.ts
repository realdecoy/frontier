import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { toKebabCase } from '@rdfrontier/stdlib';
import { checkProjectValidity, parsePageName } from '../../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from '../../../utils/constants';
import { addElementFunction } from '../../../functions/addElement/index';
import { invalidProject } from '@rdfrontier/plugin-shared/types/errors';
import { catchError } from '@rdfrontier/plugin-shared/types/catch';

const TEMPLATE_FOLDERS = ['page'];

/**
 * Class representing a page.
 * @extends Command
 */
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
    return catchError(error, CLI_STATE);
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
    if (isValidProject === false) {
      invalidProject(CLI_COMMANDS.AddPage, "rdvue");
    }

    const { args } = this.parse(Page);
    
    // retrieve page name
    const pageName = await parsePageName(args);

    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, pageName)

    this.log(`${CLI_STATE.Success} page added: ${toKebabCase(pageName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Page)}\n`);
  }
}
