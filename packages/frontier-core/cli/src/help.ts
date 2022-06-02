import { Help, Command } from '@oclif/core';
import { Topic } from '@oclif/config';
import { log } from './lib/stdout';

export default class MyHelpClass extends Help {
  async showRootHelp(): Promise<void> {
    let formattedCommandHelp = '';
    const maxSpaces = 25;

    for (const command of this.sortedCommands) {
      const numOfSpaces = maxSpaces - command.id.length;
      formattedCommandHelp += `\n\t    ${command.id}${new Array(
        numOfSpaces + 1,
      ).join(' ')} - ${command.description?.slice(0, 30)}`;
    }

    log(`

        Actions:
              ${formattedCommandHelp}
            
        Options:
            --help    | -h      -  Show help information
            --version | -v      -  Show version
        `);
  }

  async showTopicHelp(topic: Topic): Promise<void> {
    const name = topic.name;
    const depth = name.split(':').length;

    const subTopics = this.sortedTopics.filter(
      (t: any) =>
        t.name.startsWith(`${name}:`) && t.name.split(':').length === depth + 1,
    );
    const commands = this.sortedCommands.filter(
      (c: any) =>
        c.id.startsWith(`${name}:`) && c.id.split(':').length === depth + 1,
    );

    log(this.formatTopic(topic));

    if (subTopics.length > 0) {
      log(this.formatTopics(subTopics));
      log('');
    }

    if (commands.length > 0) {
      log(this.formatCommands(commands));
      log('');
    }
  }
}
