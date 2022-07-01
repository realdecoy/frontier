import {Command, flags} from '@oclif/command'
import { copyTestFile, updateTestFiles } from 'utils/files'
import { checkIfProjectIsValid } from 'utils/utilities'
import {CONSTANTS} from 'utils/constants'
import chalk = require('chalk')

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

      if (successfulReplace) {
      // Output message saying project is ready
        this.log(chalk.blue(`Test ${testName} is ready!`))
      } else {
        this.log(chalk.red('There was a issue in making your test file!'))
      }
    } else {
      this.log(chalk.red('Unable to make test, ensure you are in a valid project!'))
    }
  }
}
