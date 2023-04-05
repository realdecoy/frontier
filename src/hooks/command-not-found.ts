import { Hook } from '@oclif/core';
import chalk from 'chalk';

const reduceCommand = function (command: string[]) {
  const copyCommands = [...command];
  // const newCommands = command.slice(0, -1).join(':');
  const removedCommand = copyCommands.pop();
  return {
    reducedCommands: copyCommands.join(':'),
    removedCommand
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const runHelp = async function (config: any, command: string) {
  await config.runCommand(command, ['--help']);
  // return command.slice(0, -1).join(':');
};

// eslint-disable-next-line require-await
const hook: Hook<'command_not_found'> = async function ({ id, argv, config }) {
  // console.log(config.commandIDs);
  let commandStrings = [];
  const command = id.trim();
  // console.log("Not found: ", command, argv);
  commandStrings = command.includes(':') ? command?.split(':') : command?.split(' ');
  // console.log('Not found - commandStrings: ', commandStrings);

  if (commandStrings.length > 1) {
    const { reducedCommands, removedCommand } = reduceCommand(commandStrings);
    const args = argv && removedCommand ? [...argv, removedCommand] : [];

    // console.log('Not found - reducedCommand: ', reducedCommands);
    // console.log('Not found - args: ', args);
    await config.runCommand(reducedCommands, args);
  } else {
    // eslint-disable-next-line no-console
    console.log(`${chalk.red('command not found')}: ${command} ${argv}`);
  }
};

export default hook;
