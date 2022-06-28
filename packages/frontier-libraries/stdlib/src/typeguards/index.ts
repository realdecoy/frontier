/**
 * Typeguard for testing whether a value is a boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Typeguard for testing whether a value is a number
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * Typeguard for testing whether a value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 *Typeguard for testing whether a value is a number array
 */
export function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((i) => typeof i === 'number');
}

/**
 * Typeguard for testing whether a value is a string array
 */
export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((i) => typeof i === 'string');
}

/**
 * Convert Array like object to absolute string array
 */
export function toStringArray(value: unknown[]): string[] {
  return Array.from(value, (v) => `${v}`);
}


/**
 * Description: determine if string is valid JSON string
 * @param {string} value - a string value
 * @returns {boolean} -
 */
 export function isJsonString(value: string): boolean {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }

  return true;
}


