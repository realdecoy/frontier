import chalk from 'chalk'
import path from 'path'
import {Command, flags} from '@oclif/command'
import { CONSTANTS } from 'utils/constants'
import { copyScreenObjectFile, updateScreenObjectFile, updateFileName } from 'utils/files'
import { checkIfProjectIsValid } from 'utils/utilities' 

const { SCREEN_OBJECT_REGEX } = CONSTANTS

/**
 * Class representing a screen object.
 * @extends Command
 */
export default class CreateScreenObject extends Command {
  static description = 'Create a new screen object file'

  static examples = [
    `$ frontier qa:create-screen-object
    Running this add command!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    { name: 'name', description: 'Name of the page object file to be created' },
  ]

  async run() {
    const { args } = this.parse(CreateScreenObject);
    const screenObjectName = args.name
    const replaceRegex = SCREEN_OBJECT_REGEX
    const file = `./src/screen_objects/${screenObjectName}.ts`
    let currentFilenameSlug = path.parse(file).name // This returns just the filename without the extension

    if(checkIfProjectIsValid() === true) {
      copyScreenObjectFile(screenObjectName)
      const successfulReplace = await updateScreenObjectFile(file, replaceRegex, screenObjectName)
      await updateFileName(currentFilenameSlug)

      if (successfulReplace) {
      // Output message saying project is ready
        this.log(chalk.blue(`File ${screenObjectName} is ready!`))
      } else {
        this.log(chalk.red('There was a issue in making your screen object file!'))
      }
    } else {
      this.log(chalk.red('Unable to make screen object, ensure you are in a valid project!'))
    }    
  }
}
