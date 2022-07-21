

import { successResponseFile } from '.'
import chalk from 'chalk';


describe('test response function', () => {
    
    it("should pass test file was successfully created",  async function () {
        const successfulReplace: boolean = true;
        const elementName: string = "testFile";
        const elementType: string = "test";
        const dummyMessage = (chalk.blue(`File testFile is ready!`));
        expect(successResponseFile(successfulReplace, elementName, elementType)).toEqual(dummyMessage);
    });

    it("should pass test file was not successfully created",  async function () {
        const successfulReplace: boolean = false;
        const elementName: string = "testFile";
        const elementType: string = "test";
        const dummyMessage = (chalk.red(`There was a issue in making your ${elementType} !`));
        expect(successResponseFile(successfulReplace, elementName, elementType)).toEqual(dummyMessage);
    })
  
})