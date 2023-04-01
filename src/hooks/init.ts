import { Hook, toStandardizedId } from '@oclif/core';
import { readProjectConfig } from '../lib/files';
import { ProjectConfig } from '../modules/project';
// import { CLI_NAMESPACES } from '../lib/constants';

const hook: Hook<'init'> = async function ({ id, config, argv }) {
  const projectConfig: ProjectConfig = readProjectConfig();

  if (projectConfig.type !== undefined && id === undefined) {
    const command = toStandardizedId(projectConfig.type as string, config);

    await config.runCommand(command, argv);
    // eslint-disable-next-line no-invalid-this
    this.exit();
  }
  // run before the command is identified
};

export default hook;
