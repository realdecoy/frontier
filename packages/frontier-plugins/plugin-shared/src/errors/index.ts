import chalk from 'chalk';

/**
 * Description: Throws error if project is invalid.
 * @param {string} commandType - Type of command being ran eg: "add:component"
 * @param {string} projectType - Type of project being used eg: "rdvue"
 * @returns {Promise<void>} - 
 */
export function invalidProject(commandType: string, projectType: string): Promise<void> {
    throw new Error(
    JSON.stringify({
        code: 'project-invalid',
        message: `${commandType} command must be run in an existing ${chalk.yellow(`${projectType}`)} project`,
    }),
    );
}


/**
 * Description: Throw error if project already exists.
 * @param {string} projectType - Type of project being used eg: "rdvue"
 * @returns {Promise<void>} - 
 */
export function existingProject(projectType: string): Promise<void> {
    throw new Error(
        JSON.stringify({
          code: 'existing-project',
          message: `you are already in an existing ${chalk.yellow(`${projectType}`)} project`,
        }),
      );
}


/**
 * Description: Throw error if file has not been changed. 
 * @returns {Promise<void>} - 
 */
export function fileNotChanged(): Promise<void> {
  throw new Error(
    JSON.stringify({
      code: 'file-not-changed',
      message: 'updating your project failed',
    }),
  );
}
