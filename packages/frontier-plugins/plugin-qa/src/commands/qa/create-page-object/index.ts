import chalk from 'chalk'
import path from 'path'
import {Command, flags} from '@oclif/command'
import { CONSTANTS } from 'utils/constants'
import { copyPageObjectFile, updatePageObjectFile, updateFileName } from 'utils/files'
import { checkIfProjectIsValid } from 'utils/utilities'

const { PAGE_OBJECT_REGEX } = CONSTANTS

/**
 * Class representing a page object.
 * @extends Command
 */
export default class CreatePageObject extends Command {
  static description = 'Create a new page object file'

  static examples = [
    `$ fronter qa:create-page-object
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
    const { args } = this.parse(CreatePageObject);
    const pageObjectName = args.name
    const replaceRegex = PAGE_OBJECT_REGEX
    const file = `./src/page_objects/${pageObjectName}.ts`
    let currentFilenameSlug = path.parse(file).name // This returns just the filename without the extension

    if(checkIfProjectIsValid() === true) {
      copyPageObjectFile(pageObjectName)
      const successfulReplace = await updatePageObjectFile(file, replaceRegex, pageObjectName)
      await updateFileName(currentFilenameSlug)

      if (successfulReplace) {
      // Output message saying project is ready
        this.log(chalk.blue(`File ${pageObjectName} is ready!`))
      } else {
        this.log(chalk.red('There was a issue in making your page object file!'))
      }
    } else {
      this.log(chalk.red('Unable to make page object, ensure you are in a valid project!'))
    }    
  }
}
