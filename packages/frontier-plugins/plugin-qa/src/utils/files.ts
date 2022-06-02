// All file utilities are found here

const replace = require('replace-in-file')
import fs from 'fs'
import path from 'path'
import { PAGE_OBJECT_REPLACEMENT_FILE, SCREEN_OBJECT_REPLACEMENT_FILE, TEST_REPLACEMENT_FILE, IOS_MOBILE_ROOT_PROJECT_FILE, ANDROID_MOBILE_ROOT_PROJECT_FILE, ROOT_PROJECT_FILE} from '../utils/constants'
import {checkIfProjectExists} from '../utils/utilities'

/**
 * Description: Replace content in list of files based on configs passed in
 * @param {string} files - a path to a file
 * @param {RegExp} from - regex of the text to replace
 * @param {string} to - string that all matches should be converted to
 */
export async function replaceInFiles(files: string | string[], from: RegExp, to: string): Promise<boolean> {

  let result = false
  let replaceResults
  let failedFiles
  const options = {
    files,
    from,
    to,
  }

  try {
    replaceResults = await replace(options)
    failedFiles = replaceResults
    .filter((result: { file: string; hasChanged: boolean }) => !result.hasChanged)
    .map((result: { file: string; hasChanged: boolean }) => result.file)
    result = failedFiles.length === 0
  } catch (error) {
    const msg = (error as Error).message
    throw new Error(
      JSON.stringify({
        code: 'file-not-changed',
        message: msg,
      })
    )
  }

  return result
}

/**
 * Function to copy test file from template repo
 * @param {string} file - file to copy
 */
export function copyTestFile(file: string) {

  const replacementTestFilePath = TEST_REPLACEMENT_FILE
  // Copying the file to the right directory
  fs.copyFile(replacementTestFilePath, `./test/specs/${file}.spec.ts`, (err: any) => {
    if (err) {
      console.log('Error Found:', err)
    }
  })
}

/**
 * Function to copy page object file from template repo
 * @param {string} file - file to copy
 */
export function copyPageObjectFile(file: string) {

  const replacePageObjectFilePath = PAGE_OBJECT_REPLACEMENT_FILE
  // Copying the file to the right directory
  fs.copyFile(replacePageObjectFilePath, `./src/page_objects/${file}.ts`, (err: any) => {
    if (err) {
      console.log('Error Found:', err)
    }
  })
}

/**
 * Function to copy screen object file from template repo
 * @param {string} file - file to copy
 */
 export function copyScreenObjectFile(file: string) {
  
  const replaceScreenObjectFilePath = SCREEN_OBJECT_REPLACEMENT_FILE
  // Copying the file to the right directory
  fs.copyFile(replaceScreenObjectFilePath, `./src/screen_objects/${file}.ts`, (err: any) => {
    if (err) {
      console.log('Error Found:', err)
    }
  })
}

/**
 * Function to update all test file contents
 * @param {string} files - a path to a file
 * @param {RegExp} from - regex of the text to replace
 * @param {string} to - string that all matches should be converted to
 */
export async function updateTestFiles(files: string | string[], from: RegExp, to: string): Promise<boolean> {

  const options = {
    files,
    from,
    to,
  }

  try {
    const results = await replace(options)
    return results[0].hasChanged
  } catch (error) {
    const msg = (error as Error).message
    throw new Error(
      JSON.stringify({
        code: 'file-not-changed',
        message: msg,
      })
    )
  }
}

/**
 * Function to update all page object file contents
 * @param {string} files - a path to a file
 * @param {RegExp} from - regex of the text to replace
 * @param {string} to - string that all matches should be converted to
 */
export async function updatePageObjectFile(files: string | string[], from: RegExp, to: string): Promise<boolean> {

  const options = {
    files,
    from,
    to
  }

  try {
    const results = await replace(options)
    return results[0].hasChanged
  } catch (error) {
    const msg = (error as Error).message
    throw new Error(
      JSON.stringify({
        code: 'file-not-changed',
        message: msg,
      })
    )
  }
}

/**
 * Function to update all screen object file contents
 * @param {string} files - a path to a file
 * @param {RegExp} from - regex of the text to replace
 * @param {string} to - string that all matches should be converted to
 */
 export async function updateScreenObjectFile(files: string | string[], from: RegExp, to: string): Promise<boolean> {
   
  const options = {
    files,
    from,
    to,
  }

  try {
    const results = await replace(options)
    return results[0].hasChanged
  } catch (error) {
    const msg = (error as Error).message
    throw new Error(
      JSON.stringify({
        code: 'file-not-changed',
        message: msg,
      })
    )
  }
}

/**
 * Function to copy project template files when a user executes the project copy command
 * @param {string} from - Folder to copy
 * @param {string} to - Where the copied files should go
 */
export function copyFolderSync(from: string, to: string) {
  
  if (checkIfProjectExists(to) === true) {
    console.log('A folder by that name already exists, please try again!')
  } else {
    fs.mkdirSync(to)
    fs.readdirSync(from).forEach((element: any) => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
        fs.copyFileSync(path.join(from, element), path.join(to, element))
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element))
      }
    })
  }
}

/**
 * Function to rename file to include .screen or .page into filename
 * @param currentFilename - name of the current file to be renamed
 */
export async function updateFileName(currentFilename: string) {
  let newFilename: string
  let currentFilenamePath: string
  let newFilenamePath: string
  
  // Check if it is web project
  if(fs.existsSync(ROOT_PROJECT_FILE)) {
    newFilename = `${currentFilename}-page.ts`
    currentFilenamePath = `./src/page_objects/${currentFilename}.ts`
    newFilenamePath = `./src/page_objects/${newFilename}`

    fs.rename(currentFilenamePath, newFilenamePath, (error) => {
      if(error) console.log(error);
    })
  }

  // Check if it is mobile project
  if(fs.existsSync(ANDROID_MOBILE_ROOT_PROJECT_FILE) || fs.existsSync(IOS_MOBILE_ROOT_PROJECT_FILE)) {
    newFilename = `${currentFilename}-screen.ts`
    currentFilenamePath = `./src/screen_objects/${currentFilename}.ts`
    newFilenamePath = `./src/screen_objects/${newFilename}`

    fs.rename(currentFilenamePath, newFilenamePath, (error) => {
      if(error) console.log(error);
    })
  }
}
