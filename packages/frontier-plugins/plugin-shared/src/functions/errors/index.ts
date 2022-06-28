import path from 'path';
import chalk from 'chalk';
import { Files } from '../../modules';
import { copyFiles, inject, parseModuleConfig, updateDynamicImportsAndExports } from '../../utils/files';
import { injectImportsIntoMain } from '../../utils/plugins';
import { Route } from '../../modules/manifest';



export function validityFailed(commandType: string): Promise<void> {
    // block command unless being run within an rdvue project
    throw new Error(
    JSON.stringify({
        code: 'project-invalid',
        message: `${commandType} command must be run in an existing ${chalk.yellow('rdvue')} project`,
    }),
    );
}


