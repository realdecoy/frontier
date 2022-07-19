//TODO
import process from 'process';
import { log } from ".";

const messages = [
    "This is a random message to log",
    "This is a second random message to log"
]
//Testing log function
describe(log, () => {
  jest.spyOn(process.stdout, 'write')
  it.each(messages)('accepts %p', (target: string) => {
    expect(log(target)).toBeUndefined;
  });
  
});