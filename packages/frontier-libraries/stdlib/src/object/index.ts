
/**
 * Object helper to make object readonly and cast to read only type
 */
export function makeObjectReadOnly<T>(obj: T): Readonly<T>{
  return Object.freeze(obj)
} 