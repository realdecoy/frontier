import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { toKebabCase } from '@rdfrontier/stdlib';
import { checkProjectValidity, parseServiceName } from '../../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from '../../../utils/constants';
import { catchError } from '@rdfrontier/plugin-shared';;
import { invalidProject } from '@rdfrontier/plugin-shared';
import { addElementFunction } from '../../../functions/addElement';

const TEMPLATE_FOLDERS = ['service'];

/**
 * Class representing a service.
 * @extends Command
 */
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
    return catchError(error, CLI_STATE);
  }

  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
    if (isValidProject === false) {
      invalidProject(CLI_COMMANDS.AddService, "rdvue");
    }

    const { args } = this.parse(Service);

    // retrieve service name
    const serviceName = await parseServiceName(args);
    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, serviceName)

    this.log(`${CLI_STATE.Success} service added: ${toKebabCase(serviceName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Service)}\n`);
  }
}
