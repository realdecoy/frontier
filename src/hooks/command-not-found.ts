import { Hook } from '@oclif/core';
import chalk from 'chalk';

// eslint-disable-next-line require-await
const hook: Hook<'command_not_found'> = async function ({ id, argv, config }) {
  let commandStrings = [];
  commandStrings = id.includes(':') ? id?.split(':') : id?.split(' ');

  if (commandStrings.length > 1) {
    const reducedCommand = commandStrings.slice(0, -1).join(':');
    console.log(reducedCommand);
    await config.runCommand(reducedCommand);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else {
    // eslint-disable-next-line no-console
    console.log(`${chalk.red('command not found')}: ${id} ${argv}`);
  }
};

export default hook;
