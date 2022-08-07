export default interface clientOptions {
  commandsDir: "DEFAULT - commands" | string;
  eventsDir: "DEFAULT - events" | string;
  prefix?: "DEFAULT - !" | string;
  testServers?: string[];
  botOwners?: string[];
  typescript?: boolean;
}
