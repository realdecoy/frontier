import {expect, test} from '@oclif/test'
import { exec } from 'child_process'

const testProjectName = 'rdspec-hello-world-1'

describe('rdspec - Create A Project Test', () => {
  test
  .stdout()
  .command(['create-project', testProjectName])
  .it(`runs create-project ${testProjectName}`, ctx => {
    expect(ctx.stdout).to.contain(`${testProjectName} is ready!`)
  })

  after(() => {
    exec(`rm -r ${testProjectName}`, error => {
      if (error) {
        console.log(`error: ${error.message}`)
      }
    })
  })
})
