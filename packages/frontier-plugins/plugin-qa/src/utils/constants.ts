
const path = require('path') 

export const CONSTANTS = {
  TEMPLATE_REGEX: /project-([a-zA-Z]+)/g,
  TEST_REGEX: /<test-name>/g,
  PAGE_OBJECT_REGEX: /<PageObject>/g,
  SCREEN_OBJECT_REGEX: /<ScreenObject>/g
}

export const PROJECT_TEMPLATE = path.join(__dirname, '/../../template/project-template/')

export const MOBILE_PROJECT_TEMPLATE = path.join(__dirname, '/../../template/mobile-project-template/')

export const TEMPLATE_REPLACEMENT_FILES = [
  'package.json',
]

export const TEST_REPLACEMENT_FILE = path.join(__dirname, '/../../template/resources/test.spec.ts')

export const PAGE_OBJECT_REPLACEMENT_FILE = path.join(__dirname, '/../../template/resources/page-object.ts')

export const SCREEN_OBJECT_REPLACEMENT_FILE = path.join(__dirname, '/../../template/resources/screen-object.ts')

export const ROOT_PROJECT_FILE = 'wdio.conf.ts'

export const ANDROID_MOBILE_ROOT_PROJECT_FILE = 'wdio.local.android.conf.ts'

export const IOS_MOBILE_ROOT_PROJECT_FILE = 'wdio.local.ios.conf.ts'

