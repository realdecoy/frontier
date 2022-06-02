import {expect, test} from '@oclif/test'
import { exec } from 'child_process'

const testFileName = 'helloWorld'
const testProjectName = 'rdspec-hello-world-2'

describe('rdspec - Create A Test File Test', () => {
  test
  .stdout()
  .command(['create-project', testProjectName])
  .it(`runs create-project ${testProjectName}`, ctx => {
    expect(ctx.stdout).to.contain(`${testProjectName} is ready!`)
  })

  test
  .stdout()
  .do(() => process.chdir(testProjectName))
  .command(['create-test', testFileName])
  .do(() => process.chdir('../'))
  .it(`runs create-test ${testFileName}`, ctx => {
    expect(ctx.stdout).to.contain(`${testFileName} is ready!`)
  })

  after(() => {
    exec(`rm -r ${testProjectName}`, error => {
      if (error) {
        console.log(`error: ${error.message}`)
      }
    })
  })
})
