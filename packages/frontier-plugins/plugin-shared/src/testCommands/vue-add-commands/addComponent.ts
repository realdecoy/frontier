import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { checkProjectValidity, parseComponentName, toKebabCase } from '../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from '../../utils/constants';
import catchFunction from '../../functions/catch';
import { validityFailed, addElementFunction } from '../../functions/addelement'

const TEMPLATE_FOLDERS = ['component'];

export default class Component extends Command {
  static description = 'add a new Component module.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'name', description: 'name of new component' },
  ]

  // override Command class error handler
  catch(error: Error): Promise<any> {
    return catchFunction(error);
  }

  
  async run(): Promise<void> {
    const { isValid: isValidProject, projectRoot } = checkProjectValidity();
    // block command unless being run within an rdvue project
    if (isValidProject === false) {
      validityFailed(CLI_COMMANDS.AddComponent);
    }
    

    const { args } = this.parse(Component);
    // retrieve component name
    const componentName = await parseComponentName(args);

    // parse config files required for scaffolding this module
    addElementFunction(TEMPLATE_FOLDERS, projectRoot, componentName)
    this.log(`${CLI_STATE.Success} component added: ${toKebabCase(componentName)}`);
    this.log(`\n  Visit the documentation page for more info:\n  ${chalk.yellow(DOCUMENTATION_LINKS.Component)}\n`);
  }
}
