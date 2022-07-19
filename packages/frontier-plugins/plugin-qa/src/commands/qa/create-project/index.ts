import { Command, flags } from '@oclif/command'
import { CONSTANTS, TEMPLATE_REPLACEMENT_FILES, PROJECT_TEMPLATE } from '../../../utils/constants'
import { copyFolderSync, replaceInFiles } from '../../../utils/files'
import chalk = require('chalk')
import { checkIfProjectExists } from '../../../utils/utilities'
import { exec } from 'child_process'

const { TEMPLATE_REGEX } = CONSTANTS

/**
 * Class representing a web project.
 * @extends Command
 */
export default class CreateProject extends Command {
  static description = 'Create a new WDIO project'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'name', description: 'Name of the project to be created' },
  ]

  async run() {
    const { args } = this.parse(CreateProject)
    const projectName = args.name
    const replaceRegex = TEMPLATE_REGEX
    let filesToReplace = TEMPLATE_REPLACEMENT_FILES

    // update files to be replaced with project name reference
    filesToReplace = filesToReplace.map(p => `${projectName}/${p}`)

    if (checkIfProjectExists(projectName) === true) {
      this.log(chalk.redBright(`${projectName} already exists, please use another name!`))
    } else {
      // Copy folder and its content from template directory to new project directory
      copyFolderSync(PROJECT_TEMPLATE, `${projectName}`)

      // find and replace project name references
      const successfulReplace = await replaceInFiles(filesToReplace, replaceRegex, `${projectName}`)
      if (successfulReplace) {
        exec(`cd ${projectName} && npm install`,(error) => {
          if(error) {
            console.log(error)
          }
          // Output message saying project is ready
         this.log(chalk.blue(`Project ${projectName} is ready!`))
        })
      } else {
        this.log(chalk.red('There was a issue in making your project!'))
      }
    }
  }
}
