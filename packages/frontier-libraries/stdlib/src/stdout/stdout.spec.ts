//TODO
import { log } from ".";

const messages = [
    "This is a random message to log",
    "This is a second random message to log"
]
//Testing isJsonString
describe(log, () => {
    it.each(messages)('accepts %p', (target: string) => {
      expect(log(target)).toBeUndefined();
    });
    
  });