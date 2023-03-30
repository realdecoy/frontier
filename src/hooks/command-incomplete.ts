import path from 'node:path';
import prompts from 'prompts';
import { FRONTIER_RC } from '../lib/constants';
import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { getProjectRoot, readConfigFile } from '../lib/files';

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv, id }) {
  let projectConfig: { type?: string } = {};
  let command = '';

  // Parse frontier rc file to determine existing project type
  try {
    projectConfig = readConfigFile(path.join(getProjectRoot() as string, FRONTIER_RC));
    // console.log(projectConfig);
  } catch {
    // console.log(error.message);
  }

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
          return false;
        },
      },
    );
    const commandIndex = responses.command;
    command = choices[commandIndex].title;
  }

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
