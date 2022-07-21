import path from 'path';
<<<<<<<< HEAD:packages/frontier-plugins/plugin-vue/src/functions/addElement/index.ts
import { Files } from 'modules';
import { copyFiles, parseModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../utils/files';
import { toKebabCase, toPascalCase } from '@rdfrontier/stdlib'; 


/**
 * Description: Creates a new element of a specific type in a folder.
 * @param {string[]} TEMPLATE_FOLDERS - folders from which template files are located eg: ["component"]
 * @param {string} projectRoot - root folder location where element should be created. 
 * @param {string} elementName - name of element being created eg: "testComponent"
 * @returns {Promise<void>} - 
 */
========
import chalk from 'chalk';
import { Files } from '../../modules';
import { copyFiles, parseModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../utils/files';
import { toKebabCase, toPascalCase} from '../../utils/utilities';


// override Command class error handler
>>>>>>>> c05f44a (build: plugin-shared folder - functions folder restructured, tests added):packages/frontier-plugins/plugin-shared/src/functions/addElement/index.ts
export async function addElementFunction(TEMPLATE_FOLDERS: string[], projectRoot: string, elementName: string): Promise<void> {
    
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);

    // parse kebab and pascal case of componentName
    const elementNameKebab = toKebabCase(elementName);
    const elementNamePascal = toPascalCase(elementName);

    configs.forEach(async config => {
        const files: Array<string | Files> = config.manifest.files;
        // replace file names in config with kebab case equivalent
        replaceTargetFileNames(files, elementNameKebab);
        sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
        installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, elementNameKebab);
        // copy and update files for component being added
        await copyFiles(sourceDirectory, installDirectory, files);
        await readAndUpdateFeatureFiles(installDirectory, files, elementNameKebab, elementNamePascal);
    });
    
}