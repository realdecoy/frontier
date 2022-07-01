import chalk from 'chalk';

export function validityFailed(commandType: string, projectType: string): Promise<void> {
    // block command unless being run within an rdvue project
    throw new Error(
    JSON.stringify({
        code: 'project-invalid',
        message: `${commandType} command must be run in an existing ${chalk.yellow(`${projectType}`)} project`,
    }),
    );
}


