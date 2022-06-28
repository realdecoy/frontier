import { toKebabCase, toPascalCase } from ".";

const pascalword1 = "testPascalCase"
const pascalword2 = "newPascalWord"
const kebabword1 = "test-kebab-Case"
const kebabword2 = "new-kebab-Word"


describe(toKebabCase, () => {
    it ("testing kebab case #1",   () => { 
        expect(toKebabCase(pascalword1)).toEqual("test-pascal-case")
    });

    it ("testing kebab case #2",   () => { 
        expect(toKebabCase(pascalword2)).toEqual("new-pascal-word")
    });        
});

describe(toPascalCase, () => {
    it ("testing pascalcase #1",   () => { 
        expect(toPascalCase(kebabword1)).toEqual("TestKebabCase")
    });

    it ("testing pascalcase #2",   () => { 
        expect(toPascalCase(kebabword2)).toEqual("NewKebabWord")
    });        
  });