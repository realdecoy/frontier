import { isBoolean, isNumber, isNumberArray, isString, isStringArray, isJsonString } from '.';

const booleans = [true, false];
const numbers = [-1, 0, 1, Infinity, NaN];
const strings = ['', 'string', `template`];
// Jest unwraps an array of arrays so we provide wrapped and unwrapped variants.
// This doesn't happen to arrays with mixed content; look at the printed test
// output to ensure you're testing what you think you're testing.
const emptyArray = {
  unwrapped: [[]],
  wrapped: [[[]]],
};
const numberArrays = {
  unwrapped: [[1], [1, 2, 3]],
  wrapped: [[[1]], [[1, 2, 3]]],
};
const stringArrays = {
  unwrapped: [['a'], ['a', 'b', 'c']],
  wrapped: [[['a']], [['a', 'b', 'c']]],
};
const others = [['a', 1], {}, { a: 1 }, undefined, null];

const jsonStrings = [
  `{ "letter": "a", "number": 1, "color": "blue" }`,
  `{ "letter": "b", "number": 2, "color": "red"}`,
  `{ "character": "c", "number": 3, "color": "yellow"}`
]

const falseJsonStrings = [
  `{ "character": " ", "number": NaN, "color": "white"}`,
  `{ "character": _ , "number": NaN, "color": black}`,
  `{ "character": $ , "number": infinity, "color": "brown"}`
]

describe(isBoolean, () => {
  it.each(booleans)('accepts %p', (target: unknown) => {
    expect(isBoolean(target)).toBeTruthy();
  });

  it.each([
    ...numbers,
    ...strings,
    ...emptyArray.unwrapped,
    ...numberArrays.unwrapped,
    ...stringArrays.unwrapped,
    ...others,
  ])('rejects %p', (target: unknown) => {
    expect(isBoolean(target)).toBeFalsy();
  });
});

describe(isNumber, () => {
  it.each(numbers)('accepts %p', (target: unknown) => {
    expect(isNumber(target)).toBeTruthy();
  });

  it.each([
    ...booleans,
    ...strings,
    ...emptyArray.unwrapped,
    ...numberArrays.unwrapped,
    ...stringArrays.unwrapped,
    ...others,
  ])('rejects %p', (target: unknown) => {
    expect(isNumber(target)).toBeFalsy();
  });
});

describe(isString, () => {
  it.each(strings)('accepts %p', (target: unknown) => {
    expect(isString(target)).toBeTruthy();
  });

  it.each([
    ...booleans,
    ...numbers,
    ...emptyArray.unwrapped,
    ...numberArrays.unwrapped,
    ...stringArrays.unwrapped,
    ...others,
  ])('rejects %p', (target: unknown) => {
    expect(isString(target)).toBeFalsy();
  });
});

describe(isNumberArray, () => {
  it.each([...emptyArray.wrapped, ...numberArrays.wrapped])(
    'accepts %p',
    (target: unknown) => {
      expect(isNumberArray(target)).toBeTruthy();
    },
  );

  it.each([
    ...booleans,
    ...numbers,
    ...strings,
    ...stringArrays.unwrapped,
    ...others,
  ])('rejects %p', (target: unknown) => {
    expect(isNumberArray(target)).toBeFalsy();
  });
});

describe(isStringArray, () => {
  it.each([...emptyArray.wrapped, ...stringArrays.wrapped])(
    'accepts %p',
    (target: unknown) => {
      expect(isStringArray(target)).toBeTruthy();
    },
  );

  it.each([
    ...booleans,
    ...numbers,
    ...strings,
    ...numberArrays.unwrapped,
    ...others,
  ])('rejects %p', (target: unknown) => {
    expect(isStringArray(target)).toBeFalsy();
  });
});


//Testing isJsonString
describe(isJsonString, () => {
  it.each(jsonStrings)('accepts %p', (target: string) => {
    expect(isJsonString(target)).toBeTruthy();
  });
  
  it.each(falseJsonStrings)('accepts %p', (target: string) => {
    expect(isJsonString(target)).toBeFalsy();
  });
});
