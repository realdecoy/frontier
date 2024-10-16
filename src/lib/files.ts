/* eslint-disable max-lines */
// eslint-disable-next-line unicorn/prefer-module
const ncp = require('ncp').ncp;
// eslint-disable-next-line unicorn/prefer-module
const fsSync = require('fs');
// eslint-disable-next-line unicorn/prefer-module
const mkdirp = require('mkdirp');
// eslint-disable-next-line unicorn/prefer-module
const replace = require('replace-in-file');
// eslint-disable-next-line unicorn/import-style, unicorn/prefer-module
const util = require('util');
import path from 'node:path';
import * as fsExtra from 'fs-extra';
import { log } from './stdout';
import fileSystem from 'node:fs';
import bluebirdPromise from 'bluebird';
import { hasCamel, hasEndpointLower, hasFeature, hasKebab, hasProject } from './utilities';
import { Files, InjectOptions, ModuleConfig } from '../modules';
import { VUE_DYNAMIC_OBJECTS, EMPTY_STRING, FRONTIER_RC, RDVUE_DIRECTORY, TEMPLATE_CONFIG_FILENAME, VUE_TEMPLATE_ROOT, MOBILE_TEMPLATE_ROOT, DOTNET_TEMPLATE_ROOT } from './constants';

const UTF8 = 'utf-8';
const fs = bluebirdPromise.promisifyAll(fileSystem);
const copyFilePromise = util.promisify(fs.copyFile);
const getDirName = path.dirname;

/**
 * Description: Read file located at specified filePath
 * @param {string} filePath - a path to a file
 * @returns {string} -
 */
function readFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, UTF8);
  } catch {
    return EMPTY_STRING;
  }
}

/**
 * Description: Enumerate all directories in the given directory
 * @param {string} directoryPath - a path to a directory
 * @returns {string[]} - an array of directories
 */
function enumerateDirectories(directoryPath: string): string[] {
  return fs.readdirSync(directoryPath).filter(file => {
    return fs.statSync(path.join(directoryPath, file)).isDirectory();
  });
}

/**
 * Description: Determine whether or not the given path is a
 *              directory which exists
 * @param {string} filePath - a path to a file
 * @returns {boolean} -
 */
function directoryExists(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Description: Determine whether or not the given file exists
 * @param {string} filePath - a path to a file
 * @returns {boolean} -
 */
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * Description: Read main config file to determine options the tool can take
 * @param {string} filePath -
 * @returns {any} -
 */
function readConfigFile(filePath: string): any {
  const isExistingFile = fileExists(filePath);
  if (isExistingFile === false) {
    throw new Error(
      JSON.stringify({
        code: 'missing-template-file',
        message: 'template file not found, run rdvue upgrade to continue',
      }),
    );
  }

  return JSON.parse(readFile(filePath));
}

/**
 * Description: Read project config file to determine options the tool can take
 * @param {string} filePath -
 * @returns {any} -
 */
function readProjectConfig(): any {
  const filePath: string = path.join(getProjectRoot() ?? '', FRONTIER_RC);
  const isExistingFile = fileExists(filePath);
  if (isExistingFile === false) {
    return {};
  }

  return JSON.parse(readFile(filePath));
}

/**
 * Description: Read dotnet migration folder to determine options the tool can take
 * @param {string} projectName -
 * @returns {any} -
 */
function readMigrationNames(projectName: string): any {
  const MIGRATIONS_FOLDER_PATH = `src/${projectName}.Persistence/Migrations`;
  const folderPath: string = path.join(getProjectRoot() ?? '', MIGRATIONS_FOLDER_PATH);
  const isExistingFolder = directoryExists(folderPath);
  if (isExistingFolder === false) {
    return {};
  }

  const fileNames = readFilesFromDirectory(folderPath).filter((file: string) => {
    return !file.includes('Designer.cs') && !file.includes('DbContextModelSnapshot.cs');
  });

  return fileNames;
}

/**
 * Description: Read dotnet migration folder to determine options the tool can take
 * @param {string} projectName -
 * @returns {any} -
 */
function readApiFeatureNames(projectName: string): any {
  const FEATURES_FOLDER_PATH = `src/${projectName}.Application/Features`;
  const folderPath: string = path.join(getProjectRoot() ?? '', FEATURES_FOLDER_PATH);
  const isExistingFolder = directoryExists(folderPath);
  if (isExistingFolder === false) {
    return {};
  }

  const fileNames = readFilesFromDirectory(folderPath);

  return fileNames;
}

/**
 * Description: Read dotnet migration folder to determine options the tool can take
 * @param {string} directoryPath -
 * @returns {any} -
 */
function readFilesFromDirectory(directoryPath: string): any {
  const files = fs.readdirSync(directoryPath);

  return files;
}

/**
 *  Description: parse config files required for scaffolding this module
 * @param {string[]} folderList -
 * @param {string} projectRoot -
 * @returns {[any]} -
 */
function parseMobileModuleConfig(folderList: string[], projectRoot: string): { name: string, moduleTemplatePath: string, manifest: any }[] {
  return folderList.map(folder => {
    const moduleTemplatePath = path.join(projectRoot, MOBILE_TEMPLATE_ROOT, folder);
    const configFilePath = path.join(moduleTemplatePath, TEMPLATE_CONFIG_FILENAME);

    return {
      name: folder,
      moduleTemplatePath,
      manifest: readConfigFile(configFilePath),
    };
  });
}

/**
 *  Description: parse config files required for scaffolding this module
 * @param {string[]} folderList -
 * @param {string} projectRoot -
 * @returns {[any]} -
 */
function parseVueModuleConfig(folderList: string[], projectRoot: string): Array<ModuleConfig> {
  return folderList.map(folder => {
    const moduleTemplatePath = path.join(projectRoot, VUE_TEMPLATE_ROOT, folder);
    const configFilePath = path.join(moduleTemplatePath, TEMPLATE_CONFIG_FILENAME);

    return {
      name: folder,
      moduleTemplatePath,
      manifest: readConfigFile(configFilePath),
    };
  });
}

/**
 *  Description: parse config files required for scaffolding this module
 * @param {string[]} folderList -
 * @param {string} projectRoot -
 * @returns {[any]} -
 */
function parseDotnetModuleConfig(folderList: string[], projectRoot: string): { name: string, moduleTemplatePath: string, manifest: any }[] {
  return folderList.map(folder => {
    const moduleTemplatePath = path.join(projectRoot, DOTNET_TEMPLATE_ROOT, folder);
    const configFilePath = path.join(moduleTemplatePath, TEMPLATE_CONFIG_FILENAME);

    return {
      name: folder,
      moduleTemplatePath,
      manifest: readConfigFile(configFilePath),
    };
  });
}

/**
 * Description: Writes given data to a file
 * @param {string} filePath - path of file which will be created or modified to include given data
 * @param {string} data - data written to file
 * @returns {boolean} -
 */
function writeFile(filePath: string, data: string): boolean {
  let success = true;
  try {
    fs.writeFileSync(filePath, data);
  } catch {
    success = false;
    throw new Error('failed to write to file');
  }

  return success;
}

/**
 * Description: Replace content in list of files based on configs passed in
 * @param {string|string[]} files -
 * @param {RegExp} from -
 * @param {string} to -
 * @returns {Promise<boolean>} -
 */
async function replaceInFiles(files: string | string[], from: RegExp, to: string): Promise<boolean> {
  let result = false;
  let replaceResults;
  let failedFiles;
  const options = {
    files,
    from,
    to,
  };

  try {
    replaceResults = await replace(options);
    failedFiles = replaceResults
      .filter((result: { file: string; hasChanged: boolean }) => !result.hasChanged)
      .map((result: { file: string; hasChanged: boolean }) => result.file);
    result = failedFiles.length === 0;
  } catch {
    throw new Error(
      JSON.stringify({
        code: 'file-not-changed',
      }),
    );
  }

  return result;
}

/**
 * Description: Replace filename with a given value
 * @param {string} fileName - filename to be replaced
 * @param {RegExp} placeholder - pattern used with specified flag in order
 *                      to created new RegExp (old file name)
 * @param {string} value - value to replace old filename
 * @returns {string} -
 */
function replaceFileName(
  fileName: string,
  placeholder: RegExp,
  value: string,
): string {
  const r = new RegExp(placeholder, 'g');
  const response = fileName.replace(r, value);

  return response;
}

/**
 * Description: Update target filenames to include feature name
 * @param {Array<string|Files>} files - filenames which need to be updated
 * @param {string} featureName - the string used to update the name of the files
 * @returns {void} -
 */
function replaceTargetFileNames(
  files: Array<string | Files>,
  featureName: string,
): void {
  if (featureName !== EMPTY_STRING) {
    // eslint-disable-next-line unicorn/no-array-for-each
    files.forEach((file: string | Files) => {
      if (typeof file !== 'string' && file.target !== file.source) {
        file.target = replaceFileName(
          file.target,
          /(\${.*?})/,
          featureName ?? EMPTY_STRING,
        );
      }
    });
  }
}

/**
 * Description: Copy files from source directory to target directory
 * @param {string} source - source directory
 * @param {string} target - target directory
 * @returns {boolean} - Returns true if copy was successful
 */
async function copyDirectoryRecursive(source: string, target: string): Promise<boolean> {
  let success = false;
  if (directoryExists(target)) {
    fsSync.rmdirSync(target, { recursive: true });
    fsSync.mkdirSync(target);
  } else {
    fsSync.mkdirSync(target);
  }

  try {
    await ncp(source, target);
    success = true;
  } catch {
    success = false;
  }

  return success;
}

/**
 * Description: Copy files from a source directory to a destination directory
 * @param {string} srcDir - directory from which files will be copied
 * @param {string} destDir - directory to which files will be copied
 * @param {Array<string|Files>} files - files to be copied
 * @param {Boolean} isCorePath - flag to optionally auto set core path if config path is included, true by default.
 * @returns {Promise<any>} -
 */
function copyFilesOld(
  srcDir: string,
  destDir: string,
  files: Array<string | Files>,
  isCorePath = true,
): Promise<any> {
  return Promise.all(
    files.map((f: Files | string) => {
      let source = EMPTY_STRING;
      let dest = EMPTY_STRING;
      // Get source and destination paths
      if (typeof f === 'string') {
        source = path.join(
          srcDir,
          `${srcDir.includes('config') && isCorePath ? 'core' : EMPTY_STRING}`,
          f,
        );
        dest = path.join(destDir, f);
      } else {
        source = path.join(srcDir, f.source);
        dest = path.join(destDir, f.target);
      }

      // Create all the necessary directories if they dont exist
      const dirName = getDirName(dest);
      mkdirp.sync(dirName);

      return copyFilePromise(source, dest);
    }),
  );
}

/**
 * Description: Copy files from a source directory to a destination directory
 * @param {string} srcDir - directory from which files will be copied
 * @param {string} destDir - directory to which files will be copied
 * @param {Array<string|Files>} files - files to be copied
 * @param {Boolean} isCorePath - flag to optionally auto set core path if config path is included, true by default.
 * @returns {Promise<any>} -
 */
function copyFiles(
  srcDir: string,
  destDir: string,
  files: Array<string | Files>,
  isCorePath = true,
): void {
  // eslint-disable-next-line unicorn/no-array-for-each
  files.forEach((f: Files | string) => {
    let source = EMPTY_STRING;
    let dest = EMPTY_STRING;
    // Get source and destination paths
    if (typeof f === 'string') {
      source = path.join(
        srcDir,
        `${srcDir.includes('config') && isCorePath ? 'core' : EMPTY_STRING}`,
        f,
      );
      dest = path.join(destDir, f);
    } else {
      source = path.join(srcDir, f.source);
      dest = path.join(destDir, f.target);
    }

    // Create all the necessary directories if they dont exist
    const dirName = getDirName(dest);
    mkdirp.sync(dirName);

    // console.log(`Sorce: ${source}`);
    // console.log(`Desti: ${dest}`);
    // fsExtra.copy(source, dest);
    fs.copyFile(source, dest, err => {
      if (err) {
        console.log(err);
      }
    });
  });
}

/**
 * Description: Write changes to a file
 * @param {string} filePath - location of file to be updated
 * @param {string} content - existing file content
 * @param {string | RegExp} pattern - regex pattern or pattern to be replaced
 * @param {string} value - value to replace content in file
 * @returns {Promise<void>} -
 */
async function updateFile(
  filePath: string,
  content: string,
  pattern: string | RegExp,
  value: string,
): Promise<void> {
  const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'g');

  if (value !== EMPTY_STRING) {
    const newValue = content.replace(regex, value);
    await fs.writeFileSync(filePath, newValue, UTF8);
  }
}

/**
 * Read files that have been copied to target destination
 * and replace template values with input recieved form user
 * through prompts
 * @param {string} destDir - target destination
 * @param {Files[] | Array<string | Files>} files - files to read
 * @param {string} kebabName - name of feature in kebab case
 * @param {string} pascalName - name of feature in pascal case
 * @param {string} camelName - name of feature in camel case
 * @returns {Promise<void>} -
 */
// eslint-disable-next-line max-params
async function readAndUpdateFeatureFiles(
  destDir: string,
  files: Files[] | Array<string | Files>,
  kebabName: string,
  pascalName: string,
  camelName?: string,
): Promise<void> {
  let filePath = '';
  const promisedUpdates = [];

  // [3] For each file in the list
  for (const file of files) {
    if (typeof file === 'string') {
      continue;
    }

    // [3b] Add the target file to the path of the desired destination directory
    filePath = path.join(destDir, file.target);

    // [3c] Check if the contents of the file is defined
    if (file.content !== undefined && Array.isArray(file.content)) {
      // [3d] For each content block in the file content array
      for (const contentBlock of file.content) {
        if (contentBlock && contentBlock.matchRegex) {
          // [4] Get the content at the desired file path
          const fileContent = readFile(filePath);
          // [5] Update the contents of the file at given filePath
          promisedUpdates.push(
            updateFile(
              filePath,
              fileContent,
              contentBlock.matchRegex,
              hasKebab(contentBlock.replace) === true ?
                kebabName :
                (hasCamel(contentBlock.replace) === true && camelName ?
                  camelName :
                  // eslint-disable-next-line unicorn/no-nested-ternary
                  contentBlock.replace.includes('${') ?
                    pascalName :
                    contentBlock.replace),
            ),
          );
        }
      }
    } else if (file.content) {
      throw new Error(
        JSON.stringify({
          code: 'failed-match-and-replace',
          message: `failed to match and replace for :${kebabName} files`,
        }),
      );
    }
  }

  await Promise.all(promisedUpdates);
}

/**
 * Read files that have been copied to target destination
 * and replace template values with input recieved form user
 * through prompts
 * @param {string} destDir - target destination
 * @param {Files[] | Array<string | Files>} files - files to read
 * @param {string} kebabName - name of feature in kebab case
 * @param {string} pascalName - name of feature in pascal case
 * @param {string} camelName - name of feature in camel case
 * @param {string} projectName - name of feature in project case
 * @param {string} featureName - name of feature in feature case
 * @param {string} endpointNameLower - name of feature in lower case
 * @returns {Promise<void>} -
 */
// eslint-disable-next-line max-params
async function readAndUpdateDotnetFeatureFiles(
  destDir: string,
  files: Files[] | Array<string | Files>,
  kebabName: string,
  pascalName: string,
  camelName?: string,
  projectName?: string,
  featureName?: string,
  endpointNameLower?: string,
): Promise<void> {
  let filePath = '';
  const promisedUpdates = [];

  // [3] For each file in the list
  for (const file of files) {
    if (typeof file === 'string') {
      continue;
    }

    // [3b] Add the target file to the path of the desired destination directory
    filePath = path.join(destDir, file.target);

    // [3c] Check if the contents of the file is defined
    if (file.content !== undefined && Array.isArray(file.content)) {
      // [3d] For each content block in the file content array
      for (const contentBlock of file.content) {
        if (contentBlock && contentBlock.matchRegex) {
          // [4] Get the content at the desired file path
          const fileContent = readFile(filePath);
          // [5] Update the contents of the file at given filePath
          promisedUpdates.push(
            updateFile(
              filePath,
              fileContent,
              contentBlock.matchRegex,
              hasKebab(contentBlock.replace) === true ?
                kebabName :
                (hasCamel(contentBlock.replace) === true && camelName ?
                  camelName :
                  // eslint-disable-next-line unicorn/no-nested-ternary
                  (hasProject(contentBlock.replace) === true && projectName ?
                    projectName :
                    (hasFeature(contentBlock.replace) === true && featureName ?
                      featureName :
                      (hasEndpointLower(contentBlock.replace) === true && endpointNameLower ?
                        endpointNameLower :
                        contentBlock.replace.includes('${') ?
                          pascalName :
                          '')
                    )
                  )
                ),
            ),
          );
        }
      }
    } else if (file.content) {
      throw new Error(
        JSON.stringify({
          code: 'failed-match-and-replace',
          message: `failed to match and replace for :${kebabName} files`,
        }),
      );
    }
  }

  await Promise.all(promisedUpdates);
}

/**
 * Description: determine if is root directory of rdvue project
 * @param {string|null} location defaults to null
 * @returns {boolean} -
 */
function isRootDirectory(location: string | null = null): boolean {
  let isRoot = false;
  try {
    let paths: string[] = [];
    let testLocation = location;
    if (location === null) {
      testLocation = process.cwd();
    }

    if (testLocation !== null) {
      paths = testLocation.split(path.sep);
      if (paths.length > 0 && paths[1] === EMPTY_STRING) {
        isRoot = true;
      }
    }
  } catch {
    throw new Error('Error checking root directory');
  }

  return isRoot;
}

/**
 * Description: determine the root of the current project
 * @returns {string | null} -
 */
function getProjectRoot(): string | null {
  const configFolderName = RDVUE_DIRECTORY;
  const frontierFileName = FRONTIER_RC;
  const currentConfigFolder = path.join(process.cwd(), configFolderName);
  // Check if the current directory is the root of the project for older versions of rdvue
  if (fileExists(currentConfigFolder) && !fs.lstatSync(currentConfigFolder).isDirectory()) {
    deleteFile(currentConfigFolder);

    return process.cwd();
  }

  const maxTraverse = 20;
  let currentPath = process.cwd();
  let currentTraverse = 0;
  let projectRoot: string | null = null;
  let back = './';
  // eslint-disable-next-line no-constant-condition
  while (true) {
    currentPath = path.join(process.cwd(), back);
    back = path.join(back, '../');
    currentTraverse += 1;
    if (fileExists(path.join(currentPath, frontierFileName))) {
      projectRoot = currentPath;
      break;
    } else if (isRootDirectory(currentPath)) {
      projectRoot = null;
      break;
    } else if (currentTraverse > maxTraverse) {
      projectRoot = null;
      break;
    }
  }

  return projectRoot;
}

/**
 * Description: Determine whether or not the given file path is a
 *              directory which exists
 * @param {string} folderPath - a path to a folder
 * @returns {void} -
 */
function checkIfFolderExists(folderPath: string): void {
  const isExistingFolder = directoryExists(folderPath);
  // block command if project folder already exists
  if (isExistingFolder === true) {
    throw new Error(
      JSON.stringify({
        code: 'existing-folder',
        message: `folder named ${folderPath} already exists`,
      }),
    );
  }
}

/**
 * Description: Determine whether or not the given folder path is a
 *              directory which exists
 * @param {string} folderPath - a path to a folder
 * @returns {void} -
 */
function verifyTemplateFolderExists(folderPath: string): void {
  const isExistingFolder = directoryExists(folderPath);
  // block command if project folder already exists
  if (isExistingFolder === false) {
    throw new Error(
      JSON.stringify({
        code: 'missing-template-folder',
        message: 'template folder not found, run rdvue upgrade to continue',
      }),
    );
  }
}

/**
 * Description: Inject dynamic objects into project files
 * @param {string} projectRoot -
 * @param {string} jsonData - stringified json data from file
 * @param {string} objectName - property name to be injected
 * @param {boolean?} hasBrackets - injected object has brackets
 * @returns {void} -
 */
function parseDynamicObjects(
  projectRoot: string,
  jsonData: string,
  objectName: string,
  hasBrackets?: boolean,
): void {
  let filePathOfObjectInsideProject;
  let objectInProject;
  let objectStringToBeWritten = EMPTY_STRING;

  // 1[b] Once inside of a project values are assigned to be used
  if (projectRoot !== null) {
    // Allocate the location of the <OBJECT>.js file
    filePathOfObjectInsideProject = path.join(
      projectRoot,
      '.rdvue',
      `${objectName}.js`,
    );

    // Read files to be modified
    objectInProject = readFile(filePathOfObjectInsideProject);

    // Replace brackets & ("/`) quotations in string
    let modifiedJSONData = jsonData.replace(/["[\]`]+/g, EMPTY_STRING);

    // Remove beginning and closing brackets if its an option to be modified
    if (hasBrackets) {
      modifiedJSONData = modifiedJSONData.slice(
        1,
        -1,
      );
    }

    // Removed closers from files to append information
    const originalObjectString = objectInProject.slice(0, -2);

    // Append the new information and close files after changes
    objectStringToBeWritten = `${originalObjectString}${modifiedJSONData.trim()},${objectName === VUE_DYNAMIC_OBJECTS.Routes ? ']' : '}'};`;
  }

  // 1[c] Once everything is clear write the updated file into the ./rdvue foldler
  if (
    filePathOfObjectInsideProject !== undefined &&
    objectStringToBeWritten !== EMPTY_STRING
  ) {
    writeFile(filePathOfObjectInsideProject, objectStringToBeWritten);
  }
}

// eslint-disable-next-line valid-jsdoc
/**
 * Injects the content into the targetted file. You can control where the
 * the content is injected by specifying the index in the options argument.
 * You can also use a method to dynamically determine the index. If the index
 * is not defined, this method will inject the content at the start of the file.
 *
 * @param {string} targetPath full path to the file you are injecting into
 * @param {string} content The content to inject
 * @param {InjectOptions?} options see InjectOptions type
 */
function inject(targetPath: string, content: string, options?: InjectOptions): void {
  const encoding = options?.encoding ?? 'utf-8';
  let index = options?.index ?? 0;

  let targetContent = fs.readFileSync(targetPath, { encoding });
  const lines = targetContent.split(/\r?\n/g);

  if (typeof index === 'function') {
    index = index([...lines], targetPath);
  }

  lines.splice(index, 0, content);
  targetContent = lines.join('\n');

  fs.writeFileSync(targetPath, targetContent, { encoding });
}

/**
 * Description:
 * @param {string} projectRoot -
 * @param {string} folderName -
 * @param {string|string[]} featuredata -
 * @param {string} fileName -
 * @returns {void}
 */
async function updateDynamicImportsAndExports(
  projectRoot: string,
  folderName: string,
  featuredata: string | string[],
  fileName: string,
): Promise<void> {
  const SOURCE_DIRECTORY = 'src';

  if (projectRoot === null) {
    log('Project location was not found');
  } else {
    const fileLocation = path.join(projectRoot, SOURCE_DIRECTORY, folderName, fileName);
    if (fileExists(fileLocation)) {
      if (typeof featuredata === 'string') {
        await fs.appendFileSync(fileLocation, featuredata);
      } else {
        for (const data of featuredata) {
          fs.appendFileSync(fileLocation, data);
        }
      }
    } else {
      log(`${fileLocation} - Does not exist`);
    }
  }
}

/**
 * Description: Delete file at given path
 * @param {string} filePath - path of file which will be created or modified to include given data
 * @returns {boolean} -
 */
function deleteFile(filePath: string): boolean {
  let success = true;
  try {
    fs.unlinkSync(filePath);
  } catch {
    success = false;
    throw new Error('failed to delete file');
  }

  return success;
}

export {
  readFilesFromDirectory,
  enumerateDirectories,
  updateDynamicImportsAndExports,
  parseDynamicObjects,
  verifyTemplateFolderExists,
  checkIfFolderExists,
  parseMobileModuleConfig,
  parseVueModuleConfig,
  parseDotnetModuleConfig,
  replaceInFiles,
  replaceTargetFileNames,
  readAndUpdateFeatureFiles,
  readAndUpdateDotnetFeatureFiles,
  copyFilesOld,
  copyFiles,
  copyDirectoryRecursive,
  getProjectRoot,
  readFile,
  readConfigFile,
  readProjectConfig,
  fileExists,
  writeFile,
  inject,
  deleteFile,
  updateFile,
  readMigrationNames,
  readApiFeatureNames,
};
