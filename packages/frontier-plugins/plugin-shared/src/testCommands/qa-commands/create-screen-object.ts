import chalk from 'chalk'
import path from 'path'
import {Command, flags} from '@oclif/command'
import { CONSTANTS } from '../../qautils/constants'
import { copyScreenObjectFile, updateScreenObjectFile, updateFileName } from '../../qautils/files'
import { checkIfProjectIsValid } from '../../qautils/utilities'
import { successResponseFile } from '../../functions/response'

const { SCREEN_OBJECT_REGEX } = CONSTANTS

export default class CreateScreenObject extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ rdspec create-screen-object
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

      // Output message saying whether project is ready or not 
      const replacementMessage = await successResponseFile(successfulReplace, screenObjectName, "screen object file")
      this.log(replacementMessage)

    } else {
      this.log(chalk.red('Unable to make screen object, ensure you are in a valid project!'))
    }    
  }
}
