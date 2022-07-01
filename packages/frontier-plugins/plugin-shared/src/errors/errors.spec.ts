import { validityFailed } from '.'


describe('test project validity check function', () => {
  beforeEach(() => {
    jest.setTimeout(20000) 
  });

  it("should pass if a project-invalid error was thrown",  async function () {
    const isValidProject = false;
    const projectRoot = "./root"
    try {
      if (isValidProject === false) {
        validityFailed("add:component", "rdvue");
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
      console.log(error)
    }
  })

})