/**
 * Description: convert a string to kebab case (e.g. my-project-name)
 * @param {string} value - a
 * @returns {string} - string value
 */
 export function toKebabCase(value: string): string {
    return value &&
      (value.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [''])
        .map(x => x.toLowerCase())
        .join('-');
  }
  
  
  /**
  * Description: convert a string to pascal case (e.g. myProjectName)
  * @param {string} value - a string value
  * @returns {string} -
  */
  export function toPascalCase(value: string): string {
    return value
      .split(/[-_ ]+/)
      .join(' ')
      .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase())
      .split(' ')
      .join('');
  }
  
  