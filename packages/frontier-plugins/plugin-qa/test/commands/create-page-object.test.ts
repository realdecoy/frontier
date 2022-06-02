import {expect, test} from '@oclif/test'
import { exec } from 'child_process'

const PageObjectFileName = 'HelloWorld'
const testProjectName = 'rdspec-hello-world-3'

describe('rdspec - Create A PageObject File Test', () => {
  test
  .stdout()
  .command(['create-project', testProjectName])
  .it(`runs create-project ${testProjectName}`, ctx => {
    expect(ctx.stdout).to.contain(`${testProjectName} is ready!`)
  })

  test
  .stdout()
  .do(() => process.chdir(testProjectName))
  .command(['create-page-object', PageObjectFileName])
  .do(() => process.chdir('../'))
  .it(`runs create-page-object ${PageObjectFileName}`, ctx => {
    expect(ctx.stdout).to.contain(`${PageObjectFileName} is ready!`)
  })

  after(() => {
    exec(`rm -r ${testProjectName}`, error => {
      if (error) {
        console.log(`error: ${error.message}`)
      }
    })
  })
})
