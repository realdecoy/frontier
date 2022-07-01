import chalk from 'chalk'
import path from 'path'
import {Command, flags} from '@oclif/command'
import { CONSTANTS } from 'qautils/constants'
import { copyPageObjectFile, updatePageObjectFile, updateFileName } from 'qautils/files'
import { checkIfProjectIsValid } from 'qautils/utilities'
import { successResponseFile } from '@rdfrontier/plugin-shared'

const { PAGE_OBJECT_REGEX } = CONSTANTS
export default class CreatePageObject extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ rdspec create-page-object
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

      // Output message saying whether project is ready or not 
      const replacementMessage = await successResponseFile(successfulReplace, pageObjectName, "page object file")
      this.log(replacementMessage)

    } else {
      this.log(chalk.red('Unable to make page object, ensure you are in a valid project!'))
    }    
  }
}
