import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { parseModuleConfig } from '../../../utils/files';
import { checkProjectValidity, parseServiceName, toKebabCase } from '../../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from '../../../utils/constants';
import catchFunction from '../../../functions/catch';
import { addElementFunction } from '../../../functions/addElement';
import { validityFailed } from '../../../functions/errors';

const TEMPLATE_FOLDERS = ['service'];

export default class Service extends Command {
  static description = 'add a new Service module.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'name', description: 'name of new service' },
  ]

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
    if (isValidProject === false) {
        validityFailed(CLI_COMMANDS.AddService);
    }

    const { args } = this.parse(Service);
    const folderList = TEMPLATE_FOLDERS;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);

    // retrieve service name
    const serviceName = await parseServiceName(args);
    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, serviceName)

    this.log(`${CLI_STATE.Success} service added: ${toKebabCase(serviceName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Service)}\n`);
  }
}
