import path from 'node:path';
import { inject } from './files';

/**
 * Private helper method for finding index of last import statement.
 * @param {Array<string>} lines the lines of a file
 * @returns {number} the index of the last import statement.
 *   Returns 0 if no imports were found.
 */
function findIndexOfLastImportStatement(lines: string[]): number {
  const index = [...lines]
    .reverse()
    .findIndex(line => line.trimStart().startsWith('import'));

  return (index === -1) ? 0 : lines.length - index;
}

/**
 * Private helper method for finding the the vue initializer
 * @param {Array<string>} lines the lines of a file
 * @returns {number} the index of the last import statement.
 * @throws error if the vue initializer is not found.
 */
function findIndexOfVueConstructorVue2(lines: string[]): number {
  const index = lines.findIndex(line => line.trimStart().startsWith('new Vue'));
  if (index === -1) {
    throw new Error('Vue initializer was not defined in main.ts.');
  }

  return index + 1;
}

function findIndexOfVueConstructorVue3(lines: string[]): number {
  const content = lines.join('\n');
  const usePattern = /app\.use\([^)]+\);/g; // Find all app.use statements
  const mountPattern = /app\.mount\('#app'\);/; // Find app.mount

  const allUses = [...content.matchAll(usePattern)];
  if (allUses.length === 0) {
    throw new Error('Could not find \'app.use\' statements to inject modules.');
  }

  const lastUseIndex = content.slice(0, Math.max(0, allUses[allUses.length - 1].index! + allUses[allUses.length - 1][0].length)).split('\n').length;

  const mountLineIndex = content.slice(0, Math.max(0, mountPattern.exec(content)!.index!)).split('\n').length;

  if (lastUseIndex >= mountLineIndex) {
    throw new Error('Found \'app.mount\' before the last \'app.use\'. Check the structure of the main file.');
  }

  return lastUseIndex;
}

function findIndexOfLastRoute(lines: string[]): number {
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].includes('name: \'not-found\'')) {
      // Look for the starting curly brace of the not-found route
      while (i >= 0 && !lines[i].includes('{')) {
        i--;
      }

      return i;
    }
  }

  throw new Error('The \'not-found\' route could not be found.');
}

/**
 * private helper method for assembling path to main
 * @param {string} projectRoot root path to the project
 * @returns {string} returns the path
 */
function getMainPath(projectRoot: string): string {
  const ext = 'ts';

  return path.join(projectRoot, 'src', `main.${ext}`);
}

/**
 * private helper method for converting route object to string
 * @param {object} routeObj the route object
 * @returns {string} the string representation of the route object
 */
function routeObjectToString(routeObj: any): string {
  const { path, name, component } = routeObj;

  const componentName = name.replace(/["']/g, '').toUpperCase();
  const webpackChunkName = component.webpackChunkName ? `/* webpackChunkName: ${component.webpackChunkName} */` : '';

  return `{\n  path: ${path},\n  name: ${name},\n  component: ${componentName} ${webpackChunkName}\n},\n`;
}

function generateImportStatementForComponent(routeObj: any): string {
  const { name, component } = routeObj;

  // Convert the name to uppercase to fit the desired format (ComponentName)
  const componentName = name.replace(/["']/g, '').toUpperCase();

  // Extract the import path, excluding the function call syntax
  const importPath = component.import.match(/\(([^)]+)\)/)[1];

  return `import ${componentName} from ${importPath};\n`;
}

/**
 * helper method for injecting modules into main.
 * @param {string} projectRoot the root path of the project
 * @param {string | string[]} lines the lines to inject
 * @returns {void}
 */

function injectImportsIntoMain(projectRoot: string, lines: string | string[]): void {
  const mainPath = getMainPath(projectRoot);
  const contents = Array.isArray(lines) ? lines.join('') : lines;
  inject(mainPath, contents, {
    index: findIndexOfLastImportStatement,
  });
}

/**
 * Helper method for injecting modules into the Vue constructor
 * @param {string} projectRoot  the root path of the project
 * @param {strings} lines the lines to inject
 * @returns {void}
 */
function injectModulesIntoMainVue2(projectRoot: string, lines: string | string[]): void {
  const mainPath = getMainPath(projectRoot);
  const contents = `${Array.isArray(lines) ? lines.join(',\n') : [...lines]},`;
  inject(mainPath, contents, {
    index: findIndexOfVueConstructorVue2,
  });
}

function injectModulesIntoMainVue3(projectRoot: string, moduleNames: string | string[]): void {
  const mainPath = getMainPath(projectRoot);

  // Assuming the moduleNames are just the names, we map them to create the correct syntax
  const uses = Array.isArray(moduleNames) ?
    moduleNames.map(m => `app.use(${m});`).join('\n') :
    `app.use(${moduleNames.trim()});`;

  inject(mainPath, uses, {
    index: findIndexOfVueConstructorVue3,
  });
}

function injectRoutesIntoRouter(projectRoot: string, routesObj: any[]): void {
  const routerPath = path.join(projectRoot, 'src', 'config', 'router.ts');

  // Generate the routes strings
  const routesStrings = routesObj.map(route => routeObjectToString(route));
  const routesContent = routesStrings.join(',\n');

  // Generate the component import strings
  const importStrings = routesObj.map(route => generateImportStatementForComponent(route));
  const importContent = importStrings.join('\n');

  // Inject routes
  inject(routerPath, `${routesContent}`, {
    index: findIndexOfLastRoute,
  });

  // Inject component imports at the top (after last import statement)
  inject(routerPath, `${importContent}\n`, {
    index: findIndexOfLastImportStatement,
  });
}

export {
  injectImportsIntoMain,
  injectModulesIntoMainVue2,
  injectModulesIntoMainVue3,
  injectRoutesIntoRouter,
};
