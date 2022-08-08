import { Client } from "discord.js";
import fs from "fs";
import path from "path";
import { commandArry, slashCommandArry } from "../Functions/commandArray";
export const CommandHandler = (dir: string, client: Client) => {
  if (!fs.existsSync(path.join(__dirname, dir))) {
    throw new Error(
      `DJS-Handler > The given commands dir path doesnot exits please provide a valid path ${path.join(
        __dirname,
        dir
      )}`
    );
  }
  const commandFolders = fs.readdirSync(path.join(__dirname, dir));
  for (const folder of commandFolders) {
    const files = fs.readdirSync(path.join(__dirname, dir, folder));
    for (const file of files) {
      const command = require(path.join(__dirname, dir, folder, file));
      const commandObj = command.default;
      if (commandObj.commandType === "Command") {
        commandArry.push(commandObj as never);
      } else if (commandObj.commandType === "Slash") {
        slashCommandArry.push(commandObj as never);
      } else if (commandObj.commandType === "BOTH") {
        commandArry.push(commandObj as never);
      }
    }
  }
  console.log(`DJS-Handler > Loaded commands!`);
};
