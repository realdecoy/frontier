import {existsSync, PathLike} from 'fs'
import { ROOT_PROJECT_FILE, ANDROID_MOBILE_ROOT_PROJECT_FILE, IOS_MOBILE_ROOT_PROJECT_FILE } from '../utils/constants'

/**
 * This method checks to see if the given file path already exists in a directory
 * @param {PathLike} filePath The path to the file/directory
 * @returns {boolean} - does this file/directory already exist
 */
export function checkIfProjectExists(filePath: PathLike) {

  if (existsSync(filePath) === true) {
    return true
  }
}

/**
 * This method checks if the project where a command is being ran is a valid rdspec project
 * @returns {boolean} - is this command being ran in a valid project
 */
export function checkIfProjectIsValid() {

  // Checks if this is a valid web automation project
  if (existsSync(ROOT_PROJECT_FILE) === true) {
    return true
  } 

  // Checks if this is a valid mobile automation project
  if (existsSync(ANDROID_MOBILE_ROOT_PROJECT_FILE) === true && existsSync(IOS_MOBILE_ROOT_PROJECT_FILE) === true) {
    return true
  } 

}
