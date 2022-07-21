// import {expect, test} from '@oclif/test
import { installDepenedencies } from '.'

const pluginName = "localization"
describe('test the install dependencies function', () => {
  beforeEach(() => {
    jest.setTimeout(80000) 
  });
 
  it("should pass if an error was thrown",  async function () {
    console.log = jest.fn()
    let spy = jest.spyOn(console, 'log');
    const preInstallCommand = "C:/Users/JantaeLeckie/Desktop/RealDecoy/vue-testing-project"
    try {
        await installDepenedencies(pluginName, false, "testInstall", `cd ${preInstallCommand} &&`, "@rdfrontier/stdlib", "typescript", undefined  )
        expect(spy).toContain(`installing ${pluginName} dev dependencies`)
    } catch (error) {
        let err;
        interface errorStructure {
          code: string;
          message: string;
        }
        if (error instanceof Error) err = error.message
        let instalationError: errorStructure = JSON.parse(`${err}`);
        expect(instalationError.code).toBe("dependency-install-error")
    }
  })

  it("should pass if installation was skipped",  async function () {
    try {
      let spy = jest.spyOn(process.stdout, 'write');
      await installDepenedencies("localization", true, "testInstall", "cd test", "@rdfrontier/stdlib", "eslint", "testInstall"  )
      expect(spy).toContain("npx add-dependencies")
    } catch (error) {
        let err;
        interface errorStructure {
            code: string;
            message: string;
        }
        if (error instanceof Error) err = error.message
        expect(error).toBe(1)
    }
  })

//   it("should pass if an error was thrown",  async function () {
//     try {
//       const caught = await installDepenedencies(Error("Random Error Message"))
//       console.log(caught)
//   } catch (error) {
//       let err;
//       interface errorStructure {
//         code: string;
//         message: string;
//       }
//       if (error instanceof Error) err = error.message
//       expect(err).toBeUndefined()
//   }
//   })
})


  
