
import { exec } from 'child_process';


describe("CLI_COMMANDS.AddComponent", () => {
    it("dummptest", () => {
        const testComponentName = "dummyComponent";
        expect(testComponentName).toContain("dummyComponent")
    } )
    
    // test
    //   .stdout()
    //   .command([CLI_COMMANDS.AddComponent])
    //   .it(`runs rdvue ${CLI_COMMANDS.AddComponent} ${testComponentName} (outside project)`, ctx => {
    //     try {
    //         expect(ctx.stdout).to.contain(`[rdvue] ${CLI_COMMANDS.AddComponent} command must be run in an existing rdvue project`);
    //     } catch (error) {
    //       let err;
    //       interface errorStructure {
    //         code: string;
    //         message: string;
    //       }
    //       if (error instanceof Error) err = error.message
    //       expect(err).to.contain('missing-template-file')
    //     }
        
    //   });

//   test
//   .stdout()
//   .it("add a component to xyz",  async function () {
//     const testinput = 'an error was thrown';
//     // const error = Error("This is an error")
//     const { isValid: isValidProject, projectRoot } = checkProjectValidity();
//     const TEMPLATE_FOLDERS: string[] = ['component'];
//     const args : {} = {name: "randomname"};
    
    // try {
    //     await Component.run()
    // } catch (error) {
    //   let err;
    //   interface errorStructure {
    //     code: string;
    //     message: string;
    //   }
    //   if (error instanceof Error) err = error.message
    //   let invalidProject: errorStructure = JSON.parse(`${err}`);
    //   expect(invalidProject.code).equal('missing-template-file')
    // }
//   })

})
