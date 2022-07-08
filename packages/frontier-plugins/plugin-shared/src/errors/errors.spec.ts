import { invalidProject } from '.'


describe('test project validity check function', () => {
  beforeEach(() => {
    jest.setTimeout(20000) 
  });

  it("should pass if a project-invalid error was thrown",  async function () {
    const isValidProject = false;
    try {
      if (isValidProject === false) {
        invalidProject("add:component", "rdvue");
      }
    } catch (error) {
      let err;
      interface errorStructure {
        code: string;
        message: string;
      }
      if (error instanceof Error) err = error.message
      let invalidProject: errorStructure = JSON.parse(`${err}`);
      expect(invalidProject.code).toEqual('project-invalid')
    }
  })

})