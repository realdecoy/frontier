import {Command, flags} from '@oclif/command'
import { copyTestFile, updateTestFiles } from '../../../qautils/files'
import { checkIfProjectIsValid } from '../../../qautils/utilities'
import {CONSTANTS} from '../../../qautils/constants'
import chalk = require('chalk')
import { successResponseFile } from '../../../functions/response'

const {TEST_REGEX} = CONSTANTS

export default class CreateTest extends Command {
  static description = 'Create a new test file'

  static examples = [
    `$ rdspec create-test
    <name-of-file-without-extension>
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    { name: 'name', description: 'Name of the test file to be created' },
  ]

  async run() {
    const { args } = this.parse(CreateTest)
    const testName = args.name
    const file = `./test/specs/${testName}.spec.ts`
    const replaceRegex = TEST_REGEX

    if (checkIfProjectIsValid() === true) {
      copyTestFile(testName)
      const successfulReplace = await updateTestFiles(file, replaceRegex, testName)

      // Output message saying whether project is ready or not 
      const replacementMessage = await successResponseFile(successfulReplace, testName, "test file")
      this.log(replacementMessage)

    } else {
      this.log(chalk.red('Unable to make test, ensure you are in a valid project!'))
    }
  }
}
