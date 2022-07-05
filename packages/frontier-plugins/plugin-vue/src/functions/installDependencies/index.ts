import shell from 'shelljs';
import cli from 'cli-ux';
const util = require('util');
const exec = util.promisify(shell.exec);
import { CLI_STATE } from '../../utils/constants';

/**
 * Description: Install plugin dependencies into a project.
 * @param {string} pluginName - name of plugin eg:"buefy"
 * @param {boolean} skipInstallStep - a boolean value eg: true
 * @param {string | undefined} projectName - name of project eg: "rdvue-test-project"
 * @param {string} preInstallCommand - command to run pre-installation eg: "cd .. &&"
 * @param {any | undefine} devDependencies - dev dependencies to install 
 * @param {any | undefine} dependencies - dependencies to install
 * @param {string | undefined} id - 
 * @returns {Promise<void>} - 
 */
export async function installDepenedencies(pluginName: string, skipInstallStep: boolean, projectName: string | undefined, preInstallCommand: string, devDependencies: any | undefined, dependencies: any, id: string | undefined): Promise<void> {
    if (skipInstallStep === false) {
      try {
        if (devDependencies !== undefined){
          // // install dev dependencies
          cli.action.start(`${CLI_STATE.Info} installing ${pluginName} dev dependencies`);
          await exec(`${preInstallCommand} npm install --save-dev ${devDependencies}`, { silent: true });
          cli.action.stop();
        }
        // // install dependencies
        cli.action.start(`${CLI_STATE.Info} installing ${pluginName} dependencies`);
        await exec(`${preInstallCommand} npm install --save ${dependencies}`, { silent: true });
        cli.action.stop();
      } catch (error) {
        throw new Error(
          JSON.stringify({
            code: 'dependency-install-error',
            message: `${id} ${pluginName} dependencies failed to install`,
          }),
        );
      }
    } else {
      cli.action.start(`${CLI_STATE.Info} adding ${pluginName} dependencies`);
      await exec(`cd ${projectName} && npx add-dependencies ${devDependencies} --save-dev`, { silent: true });
      await exec(`cd ${projectName} && npx add-dependencies ${dependencies}`, { silent: true });
      cli.action.stop();
    }
}
