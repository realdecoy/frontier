import { Hook, toStandardizedId } from '@oclif/core';
import { readProjectConfig } from '../lib/files';
import { ProjectConfig } from '../modules/project';

const hook: Hook<'init'> = async function ({ id, config, argv }) {
  // console.log('FRONTIER', argv);
  const projectConfig: ProjectConfig = readProjectConfig();
  const namespace = projectConfig.type;

  // display namespace help menu if exists
  if (namespace !== undefined && id === undefined) {
    const command = toStandardizedId(namespace as string, config);

    await config.runCommand(command, argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (namespace !== undefined && id !== undefined) {
    // A nameespace has been identified and a command has been entered
    // if the namespace is already included in the command then dont duplicate it otherwise include it as a prefix
    const prefix = id.includes(namespace) ? '' : namespace;
    const rawCommandList = id?.split(':');
    const rawCommand = `${prefix} ${rawCommandList.join(' ')} ${argv.join(' ')}`.trim();
    const fullCommandList = rawCommand.split(' ');
    // include the args of the command
    const rawArgs = fullCommandList.length > 3 ? fullCommandList.slice(3) : [];
    const fullCommand = fullCommandList.length > 3 ? fullCommandList.slice(0, 3).join(':') : fullCommandList.join(':');
    const command = toStandardizedId(fullCommand, config);

    await config.runCommand(command, rawArgs);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (id !== undefined) {
    console.log(`ID: ${id.trim()}`);
    console.log(`ARG: ${argv}`);
    await config.runCommand(id.trim(), argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  }

  // run before the command is identified
};

export default hook;
