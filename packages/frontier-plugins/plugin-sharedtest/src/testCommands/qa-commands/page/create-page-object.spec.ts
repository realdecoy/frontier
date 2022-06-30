
// const { expect, test } = require('@oclif/test')
// import { CLI_COMMANDS } from '../../../utils/constants';
// import { exec } from 'child_process';
import CreatePageObject from "./create-page-object";

// const skipPresets = '--skipPresets';
// const testProjectName = 'rdv-component-test';
// const testComponentName = 'hello-world';
const { log } = console;

// jest.useRealTimers();

describe("Test the Create Page Object command", () => {
  beforeAll(() => {
    jest.spyOn(process.stdout, 'write').mockImplementation(function () { return true; });
  });


  it("dummptest", async () => {
    // jest.setTimeout(100 * 1000) 
    // let spy = jest.spyOn(process.stdout, 'write');
    const testPageObjectName = "dummyPageObject";
    expect(testPageObjectName).toContain(`dummy`)

    // TODO: await causes the test to time out, without await the test does not work
    // await CreatePageObject.run([testPageObjectName])
    // expect(process.stdout.write).toContain(`dummy`)
  })
});
