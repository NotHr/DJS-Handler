import { Client } from "discord.js";

export default interface Command {
  name: string;
  aliases?: string[];
  istest?: boolean;
  description: string;
  commandType: "Command" | "Slash" | "BOTH";
  run?: (client: Client, ...args: any) => any;
  runSlash?: (clirnt: Client, ...args: any) => any;
}
