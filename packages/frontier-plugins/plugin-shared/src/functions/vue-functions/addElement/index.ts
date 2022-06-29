import path from 'path';
import chalk from 'chalk';
import { Files } from '../../../modules';
import { copyFiles, parseModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../../../utils/files';
import { toKebabCase, toPascalCase} from '../../../utils/utilities';


// override Command class error handler
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