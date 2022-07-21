
// const { expect, test } = require('@oclif/test')
// import { CLI_COMMANDS } from '../../../utils/constants';
import { exec } from 'child_process';


const skipPresets = '--skipPresets';
const testProjectName = 'rdv-component-test';
const testComponentName = 'hello-world';
const { log } = console;

describe("CLI_COMMANDS.AddComponent", () => {
  let spy = jest.spyOn(process.stdout, 'write');
  it("dummptest", () => {
    const testComponentName = "dummyComponent";
    expect(testComponentName).toContain("dummyComponent")
} )
  // test
  // .stdout()
  // .command([CLI_COMMANDS.AddComponent])
  // .it(`runs rdvue ${CLI_COMMANDS.AddComponent} ${testComponentName} (outside project)`, () => {
  //   expect(spy).to.contain(`[rdvue] ${CLI_COMMANDS.AddComponent} command must be run in an existing rdvue project`);
  // });

  // test
  //   .stdout()
  //   .command([CLI_COMMANDS.CreateProject, testProjectName, skipPresets])
  //   .do(() => process.chdir(testProjectName))
  //   .command([CLI_COMMANDS.AddComponent, testComponentName])
  //   .do(() => process.chdir('../'))
  //   .it(`runs rdvue ${CLI_COMMANDS.AddComponent} ${testComponentName}`, () => {
  //     expect(spy).to.contain(`[rdvue] component added: ${testComponentName}`);
  //   });

  
});
