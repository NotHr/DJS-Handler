import { Client } from "discord.js";
import { commandArry } from "./commandArray";

export const loadCommands = (client: Client, prefix: string) => {
  client.once("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
      return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandNa = args.shift()?.toLocaleLowerCase();
    const command: any = commandArry.find(
      (cmd: any) => cmd?.name === commandNa
    );
    command.run(client, ...args);
  });
};
