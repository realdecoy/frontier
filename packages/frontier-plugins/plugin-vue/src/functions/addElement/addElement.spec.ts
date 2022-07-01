import { addElementFunction } from '.'


// This test is not completed so it will not work
describe('Add element to vue project', () => {
  it("should pass if template file missing error was thrown",  async function () {
    const projectRoot = "C:/Users/JantaeLeckie/Desktop/RealDecoy"
    const TEMPLATE_FOLDERS: string[] = ['component'];
    try {
      await addElementFunction(TEMPLATE_FOLDERS, projectRoot, "RandomComponent")
    } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      let invalidProject: errorStructure = JSON.parse(`${err}`);
      expect(invalidProject.code).toEqual("missing-template-file")
    }
  })

  it("should pass if element was created",  async function () {
    const projectRoot = "C:/Users/JantaeLeckie/Desktop/RealDecoy/vue-testing-project"
    const TEMPLATE_FOLDERS: string[] = ['component'];
    try {
      await addElementFunction(TEMPLATE_FOLDERS, projectRoot, "RandomComponent")
    } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      let invalidProject: errorStructure = JSON.parse(`${err}`);
      expect(invalidProject.code).toEqual("missing-template-file")
    }
  })

})
