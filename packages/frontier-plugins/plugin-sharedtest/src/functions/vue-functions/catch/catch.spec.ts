// import {expect, test} from '@oclif/test
import catchFunction from '.'


describe('test the catch function', () => {
  beforeEach(() => {
    jest.setTimeout(20000) 
  });
 
  it("should pass if an error was thrown",  async function () {
    try {
      const caught = await catchFunction(Error("This is an error"))
      console.log(caught)
  } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      expect(err).toBeUndefined()
  }
  })

  it("should pass if an error was thrown",  async function () {
    try {
      const caught = await catchFunction(Error("Random Error Message"))
      console.log(caught)
  } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      expect(err).toBeUndefined()
  }
  })
})


  
