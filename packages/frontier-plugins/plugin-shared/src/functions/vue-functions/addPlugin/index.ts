import path from 'path';
import chalk from 'chalk';
import { Files } from '../../../modules';
import { copyFiles, inject, parseModuleConfig, updateDynamicImportsAndExports } from '../../../utils/files';
import { injectImportsIntoMain } from '../../../utils/plugins';
import { Route } from '../../../modules/manifest';



// override Command class error handler
export async function addPluginFunction(TEMPLATE_FOLDERS: string[], TEMPLATE_MIN_VERSION_SUPPORTED: number, projectRoot: string): Promise<void> {
    const folderList = TEMPLATE_FOLDERS;

    // parse config files required for scaffolding this module
    const configs = parseModuleConfig(folderList, projectRoot);
    const config = configs[0];
    const files: Array<string | Files> = config.manifest.files;
    const dependencies = config.manifest.packages.dependencies.toString()
      .split(',')
      .join(' ');

    const sourceDirectory: string = path.join(config.moduleTemplatePath, config.manifest.sourceDirectory);
    const installDirectory: string = path.join(projectRoot, 'src', config.manifest.installDirectory);
    const routePath: string = path.join(projectRoot, 'src', 'config', 'router.ts');

    // copy and update files for plugin being added
    await copyFiles(sourceDirectory, installDirectory, files);
    const { routes }: { routes: Array<Route> } = config.manifest;
    if (routes && routes.length > 0) {
      const formattedContent: string = JSON.stringify(routes, null, 2)
        .replace(/(?<!\\)"/g, '')     // remove escaped quotes added by JSON.stringify
        .replace(/[\\]+"/g, '"')      // remove extra escaping slashes from escaped double quotes
        .replace(/^\s*\[\n/, '')      // remove the array notation from the start of the string
        .replace(/\s*\]$/, '')        // remove the array notation from the end of the string
        .replace(/^(\s*)/gm, '$1  '); // add extra spaces to align injected code with existing code
      const content = `${formattedContent},`;
      inject(routePath, content, {
        index: (lines, file) => {
          const index = lines.findIndex(line => line.trim().startsWith('routes: ['));
          if (index < 0) {
            throw new Error(`Could not find routes in ${file}`);
          }

          return index + 1;
        },
      });
    }
    updateDynamicImportsAndExports(projectRoot, 'theme', config.manifest.projectTheme, '_all.scss');
    updateDynamicImportsAndExports(projectRoot, 'modules/core', config.manifest.moduleImports, 'index.ts');
    if (config.manifest.version >= TEMPLATE_MIN_VERSION_SUPPORTED) {
      const { imports: mainImports } = config.manifest.main;
      injectImportsIntoMain(projectRoot, mainImports);
    }
}