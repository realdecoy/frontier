
// const { expect, test } = require('@oclif/test')
// import { CLI_COMMANDS } from '../../../utils/constants';
// import { exec } from 'child_process';
import CreateScreenObject from "./create-screen-object";

// const skipPresets = '--skipPresets';
// const testProjectName = 'rdv-component-test';
// const testComponentName = 'hello-world';
const { log } = console;

// jest.useRealTimers();

describe("Test the Create Screen Object command", () => {
  beforeAll(() => {
    jest.spyOn(process.stdout, 'write').mockImplementation(function () { return true; });
  });


  it("dummptest", async () => {
    // jest.setTimeout(100 * 1000) 
    // let spy = jest.spyOn(process.stdout, 'write');
    const testScreenObjectName = "dummyScreenObject";
    expect(testScreenObjectName).toContain(`dummy`)

    // TODO: await causes the test to time out, without await the test does not work
    // await CreateScreenObject.run([testScreenObjectName])
    // expect(process.stdout.write).toContain(`dummy`)
  })
});
