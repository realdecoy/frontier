import chalk from 'chalk';


export function successResponseFile(successfulReplace: boolean, elementName: string, elementType: string): string {
    if (successfulReplace) {
    // Output message saying project is ready
        return (chalk.blue(`File ${elementName} is ready!`))
    } else {
        return (chalk.red(`There was a issue in making your ${elementType} !`))
    }
}

export function successResponseProject(successfulReplace: boolean, elementName: string, elementType: string): string {
    return `This ${successfulReplace} ${elementName}, ${elementType}`
}