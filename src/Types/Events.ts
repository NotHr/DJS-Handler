import { Client, ClientEvents } from "discord.js";

export default interface Event {
  name: keyof ClientEvents;
  run: (client: Client, ...args: any) => any;
}
