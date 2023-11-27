import chalk from 'chalk';
import prompts from 'prompts';
import { ProjectConfig } from '../modules/project.js';
import { readProjectConfig } from '../lib/files.js';
import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv, id }) {
  const projectConfig: ProjectConfig = readProjectConfig();

  let command: string | undefined = '';

  // eslint-disable-next-line no-negated-condition
  if (projectConfig.type !== undefined) {
    command = `${projectConfig.type}:${id}`;
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
        console.log(`command ${chalk.red(id.split(':').join(' '))} canceled`);

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

  // console.log(config.commandIDs);

  const standardizedCommand = toStandardizedId(command as string, config);
  // if (argv.includes('--help') || argv.includes('-h')) {
  //   return config.runCommand(standardizedCommand);
  // }
  if (!standardizedCommand.includes('--help') && argv.includes('--help')) {
    // console.log({ where: 'command-incomplete', key: { command, standardizedCommand, argv } });

    return config.runCommand(`${standardizedCommand}`, ['--help']);
  }

  return config.runCommand(standardizedCommand, argv);
};

export default hook;
