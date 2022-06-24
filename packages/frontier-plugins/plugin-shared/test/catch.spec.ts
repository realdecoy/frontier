import {expect, test} from '@oclif/test'
import { exec } from 'child_process'
import catchFunction from '../src/functions/catch'


describe('test the catch function', () => {
  test
  .stdout()
  .it("should pass if an error was thrown",  async function () {
    const testinput = 'an error was thrown';
    // const error = Error("This is an error")

    try {
        const caught = await catchFunction(Error("This is an error"))
        console.log(caught)
    } catch (error) {
        expect(testinput).equal('an error was thrown')
        console.log(error)
    }
  })

})


  
