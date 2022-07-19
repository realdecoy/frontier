import { successfulReplaceResponse } from '.'
import chalk from 'chalk';


describe('test response function', () => {
    beforeEach(() => {
        jest.setTimeout(20000) 
    });
    
    it("should pass test file was successfully created",  async function () {
        const successfulReplace: boolean = true;
        const elementName: string = "testFile";
        const elementType: string = "test file";
        const dummyResponse = (chalk.blue(`File ${elementName} is ready!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    });

    it("should pass test file was not successfully created",  async function () {
        const successfulReplace: boolean = false;
        const elementName: string = "testFile";
        const elementType: string = "test";
        const dummyResponse = (chalk.red(`There was a issue in making your ${elementType} file!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    })

    it("should pass page object file was successfully created",  async function () {
        const successfulReplace: boolean = true;
        const elementName: string = "pageObject";
        const elementType: string = "page object ";
        const dummyResponse = (chalk.blue(`File ${elementName} is ready!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    });

    it("should pass page object file was not successfully created",  async function () {
        const successfulReplace: boolean = false;
        const elementName: string = "pageObject";
        const elementType: string = "page object";
        const dummyResponse = (chalk.red(`There was a issue in making your ${elementType} file!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    })

    it("should pass screen object file was successfully created",  async function () {
        const successfulReplace: boolean = true;
        const elementName: string = "screenObject";
        const elementType: string = "screen object ";
        const dummyResponse = (chalk.blue(`File ${elementName} is ready!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    });

    it("should pass screen object file was not successfully created",  async function () {
        const successfulReplace: boolean = false;
        const elementName: string = "screenObject";
        const elementType: string = "screen object";
        const dummyResponse = (chalk.red(`There was a issue in making your ${elementType} file!`));
        expect(successfulReplaceResponse(successfulReplace, elementName, elementType)).toEqual(dummyResponse);
    })
  
})