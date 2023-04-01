import { Hook } from '@oclif/core';
import chalk from 'chalk';

// eslint-disable-next-line require-await
const hook: Hook<'command_not_found '> = async function ({ id, argv }) {
  console.log(`${chalk.red('command not found')}: ${id} ${argv}`);
};

export default hook;
