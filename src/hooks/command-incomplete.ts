import chalk from 'chalk';
import prompts from 'prompts';
import { ProjectConfig } from '../modules/project';
import { readProjectConfig } from '../lib/files';
import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv, id }) {
  const projectConfig: ProjectConfig = readProjectConfig();
  let command: string | undefined = '';

  // eslint-disable-next-line no-negated-condition
  if (projectConfig.type !== undefined) {
    command = `${projectConfig.type} ${id}`;
  } else {
    const choices = matches.map(p => {
      return {
        title: toConfiguredId(p.id, config),
      };
    });

    // Prompt user for intended command
    const responses: any = await prompts(
      [
        {
          name: 'command',
          initial: 0,
          message: 'Which of these commands would you like to run?',
          type: 'select',
          choices,
        },
      ], {
        onCancel() {
          // eslint-disable-next-line no-console
          console.log(`command ${chalk.red(id)} canceled`);

          return false;
        },
      },
    );
    const commandIndex = responses.command;
    // eslint-disable-next-line no-negated-condition
    command = commandIndex !== undefined ? choices[commandIndex].title : undefined;
  }

  if (command === undefined) {
    return;
  }

  // if (argv.includes('--help') || argv.includes('-h')) {
  //   return config.runCommand('help', [toStandardizedId(command as string, config)]);
  // }

  return config.runCommand(toStandardizedId(command as string, config), argv);
};

export default hook;
