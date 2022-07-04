import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import { toKebabCase } from '@rdfrontier/stdlib';
import { checkProjectValidity, parseComponentName } from '../../../utils/utilities';
import { CLI_COMMANDS, CLI_STATE, DOCUMENTATION_LINKS } from '../../../utils/constants';
import { addElementFunction } from 'functions/addElement';
import { invalidProject } from '@rdfrontier/plugin-shared';
import catchFunction from 'functions/catch';

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
      invalidProject(CLI_COMMANDS.AddComponent, "rdvue");
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
