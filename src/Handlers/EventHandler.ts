import { Client } from "discord.js";
import fs from "fs";
import path from "path";

export const eventHandler = (client: Client, dir: string) => {
  if (!fs.existsSync(path.join(__dirname, dir))) {
    throw new Error(
      `DJS-Hanlder > Not found a the dir ${dir}. Please provide a valid dir if your project is in src folder the user src/${dir}`
    );
  }
  const commandFolders = fs.readdirSync(path.join(__dirname, dir));
  for (const folders of commandFolders) {
    const files = fs.readdirSync(path.join(__dirname, dir, folders));
    for (const file of files) {
      const event = require(path.join(__dirname, dir, folders, file));
      const eventDetails = event.default;
      client.on(eventDetails.name, (...args) => {
        eventDetails.run(client, ...args);
      });
    }
  }
  console.log(`DJS-Handler > Loaded all events!`);
};
