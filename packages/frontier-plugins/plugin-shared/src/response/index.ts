import chalk from 'chalk';

/**
 * Description: Outputs if a file is ready for use nor not.
 * @param {boolean} successfulReplace - a boolean value eg: true
 * @param {string} elementName - name of element being created eg: "testComponent"
 * @param {string} elementType - type of element being created eg: "component"
 * @returns {string} - 
 */
export function successfulReplaceResponse(successfulReplace: boolean, elementName: string, elementType: string): string {
    if (successfulReplace) {
    // Output message saying project is ready
        return (chalk.blue(`File ${elementName} is ready!`))
    } else {
        return (chalk.red(`There was a issue in making your ${elementType} file!`))
    }
}
