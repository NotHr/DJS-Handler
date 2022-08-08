import { Client, Collection } from "discord.js";
import { EventEmitter } from "events";
import { loadCommands } from "./Functions/loadCommands";
import { CommandHandler } from "./Handlers/CommandHandler";
import { eventHandler } from "./Handlers/EventHandler";
import clientOptions from "./Types/ClientOptions";

export default class DJSHandler extends EventEmitter {
  private _commands = "commands";
  private _events = "events";
  private _prefix = "!";
  constructor(client: Client, options: clientOptions) {
    super();
    this.init(client, options);
  }
  private async init(client: Client, options: clientOptions) {
    if (!client) {
      throw new Error(
        "DJS-Handeler > No valid Discord Client is Provided Please check it!"
      );
      return;
    }
    if (!options.commandsDir) {
      console.warn(
        "DJS-Handler > No commands dir is provided using the default commands folder!"
      );
      options.commandsDir = this._commands;
    }
    if (!options.eventsDir) {
      console.warn(
        "DJS-Handler > No events dir is provided using the default commands folder!"
      );
      options.eventsDir = this._events;
    }
    if (!options.prefix) {
      console.warn(
        'DJS-Handler > No prefix is provided so using the default prefic "!"'
      );
      options.prefix = this._prefix;
    }
    eventHandler(client, options.eventsDir);
    CommandHandler(options.commandsDir, client);
    loadCommands(client, options.prefix);
  }
}
