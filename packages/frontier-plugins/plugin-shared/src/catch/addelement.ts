import path from 'path';
import chalk from 'chalk';
import { Files } from '../modules';
import { copyFiles, parseModuleConfig, readAndUpdateFeatureFiles, replaceTargetFileNames } from '../utils/files';
import { checkProjectValidity, parseComponentName, toKebabCase, toPascalCase} from '../utils/utilities';
import { CLI_COMMANDS} from '../utils/constants';



export function validityFailed(commandType: string): Promise<void> {
    // block command unless being run within an rdvue project
    throw new Error(
    JSON.stringify({
        code: 'project-invalid',
        message: `${commandType} command must be run in an existing ${chalk.yellow('rdvue')} project`,
    }),
    );
}

// override Command class error handler
export async function addFunction(TEMPLATE_FOLDERS: string[], args: {}, projectRoot: string): Promise<void> {
    
    const folderList = TEMPLATE_FOLDERS;
    let sourceDirectory: string;
    let installDirectory: string;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);

    // retrieve component name
    const componentName = await parseComponentName(args);
    // parse kebab and pascal case of componentName
    const componentNameKebab = toKebabCase(componentName);
    const componentNamePascal = toPascalCase(componentName);

    configs.forEach(async config => {
        const files: Array<string | Files> = config.manifest.files;
        // replace file names in config with kebab case equivalent
        replaceTargetFileNames(files, componentNameKebab);
        sourceDirectory = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
        installDirectory = path.join(projectRoot, 'src', config.manifest.installDirectory, componentNameKebab);
        // copy and update files for component being added
        await copyFiles(sourceDirectory, installDirectory, files);
        await readAndUpdateFeatureFiles(installDirectory, files, componentNameKebab, componentNamePascal);
    });
    
}