"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const commandArray_1 = require("../Functions/commandArray");
const CommandHandler = (dir, client) => {
    if (!fs_1.default.existsSync(path_1.default.join(__dirname, dir))) {
        throw new Error(`DJS-Handler > The given commands dir path doesnot exits please provide a valid path ${path_1.default.join(__dirname, dir)}`);
    }
    const commandFolders = fs_1.default.readdirSync(path_1.default.join(__dirname, dir));
    for (const folder of commandFolders) {
        const files = fs_1.default.readdirSync(path_1.default.join(__dirname, dir, folder));
        for (const file of files) {
            const command = require(path_1.default.join(__dirname, dir, folder, file));
            const commandObj = command.default;
            if (commandObj.commandType === "Command") {
                commandArray_1.commandArry.push(commandObj);
            }
            else if (commandObj.commandType === "Slash") {
                commandArray_1.slashCommandArry.push(commandObj);
            }
            else if (commandObj.commandType === "BOTH") {
                commandArray_1.commandArry.push(commandObj);
            }
        }
    }
    console.log(`DJS-Handler > Loaded commands!`);
};
exports.CommandHandler = CommandHandler;
