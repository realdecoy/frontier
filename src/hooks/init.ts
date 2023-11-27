import { Hook, toStandardizedId } from '@oclif/core';
import { readProjectConfig } from '../lib/files.js';
import { ProjectConfig } from '../modules/project.js';

const hook: Hook.Init = async function ({ id, config, argv }) {
  // console.log({ where: 'init', { id, argv }});
  // id = id?.replaceAll(' --help', ' ') || '';
  // id = id?.replaceAll(' -h', ' ') || '';
  // argv = argv.filter(a => a !== '-h' && a !== '--help');
  const projectConfig: ProjectConfig = readProjectConfig();
  const namespace = projectConfig.type;
  const hasNamespace = namespace !== undefined;
  const hasCommandId = id !== undefined;

  // display namespace help menu if exists
  if (hasNamespace && !hasCommandId) {
    // console.log({ where: 'init', key: 1 });
    const command = toStandardizedId(namespace as string, config);

    await config.runCommand(command, argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (hasNamespace && hasCommandId) {
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
    // console.log({ where: 'init', key: { command, rawArgs } });
    await config.runCommand(command, rawArgs);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else if (hasCommandId) {
    // console.log({ where: 'init', key: 3 });
    // console.log({ where: 'init', `ID: ${id.trim()}`});
    // console.log({ where: 'init', `ARG: ${argv}`});
    await config.runCommand(id.trim(), argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  } else {
    // console.log({ where: 'init', key: 0 });
  }

  // run before the command is identified
};

export default hook;
