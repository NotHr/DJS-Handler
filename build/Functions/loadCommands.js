"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCommands = void 0;
const commandArray_1 = require("./commandArray");
const loadCommands = (client, prefix) => {
    client.once("messageCreate", (message) => {
        var _a;
        if (!message.content.startsWith(prefix) || message.author.bot) {
            return;
        }
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandNa = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
        const command = commandArray_1.commandArry.find((cmd) => (cmd === null || cmd === void 0 ? void 0 : cmd.name) === commandNa);
        command.run(client, ...args);
    });
};
exports.loadCommands = loadCommands;
