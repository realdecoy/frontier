import { Hook, toStandardizedId } from '@oclif/core';
import { readProjectConfig } from '../lib/files';
import { ProjectConfig } from '../modules/project';

const hook: Hook<'init'> = async function ({ id, config, argv }) {
  // console.log('FRONTIER', argv);
  const projectConfig: ProjectConfig = readProjectConfig();
  const namespace = projectConfig.type;

  // display namespace help menu if exists
  if (namespace !== undefined && id === undefined) {
    console.log('NAMESPACE_FOUND', namespace);
    const command = toStandardizedId(namespace as string, config);

    await config.runCommand(command, argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (namespace !== undefined && id !== undefined) {
    console.log(id);
    // A nameespace has been identified and a command has been entered
    // if the namespace is already included in the command then dont duplicate it
    const prefix = id.includes(namespace) ? '' : namespace;
    const rawCommandList = id?.split(':');
    const rawCommand = `${prefix} ${rawCommandList.join(' ')}`;

    const rawArgs = rawCommand.split(' ').splice
    const command = toStandardizedId(rawCommand, config);

    console.log(`COMMAND_STRING: ${command} ${argv}`);

    await config.runCommand(command, argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (id !== undefined) {
    await config.runCommand(id.trim());
    // eslint-disable-next-line no-invalid-this
    this.exit();
  }

  console.log('BLAH');
  // run before the command is identified
};

export default hook;
