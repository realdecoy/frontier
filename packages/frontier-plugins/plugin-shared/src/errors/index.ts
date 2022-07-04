import chalk from 'chalk';

export function invalidProject(commandType: string, projectType: string): Promise<void> {
    // block command unless being run within a specific project 
    throw new Error(
    JSON.stringify({
        code: 'project-invalid',
        message: `${commandType} command must be run in an existing ${chalk.yellow(`${projectType}`)} project`,
    }),
    );
}



export function existingProject(projectType: string): Promise<void> {
    // block command unless being run within a specific project
    throw new Error(
        JSON.stringify({
          code: 'existing-project',
          message: `you are already in an existing ${chalk.yellow(`${projectType}`)} project`,
        }),
      );
}

export function fileNotChanged(): Promise<void> {
  // block command unless being run within a specific project
  throw new Error(
    JSON.stringify({
      code: 'file-not-changed',
      message: 'updating your project failed',
    }),
  );
}
