"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const eventHandler = (client, dir) => {
    if (!fs_1.default.existsSync(path_1.default.join(__dirname, dir))) {
        throw new Error(`DJS-Hanlder > Not found a the dir ${dir}. Please provide a valid dir if your project is in src folder the user src/${dir}`);
    }
    const commandFolders = fs_1.default.readdirSync(path_1.default.join(__dirname, dir));
    for (const folders of commandFolders) {
        const files = fs_1.default.readdirSync(path_1.default.join(__dirname, dir, folders));
        for (const file of files) {
            const event = require(path_1.default.join(__dirname, dir, folders, file));
            const eventDetails = event.default;
            client.on(eventDetails.name, (...args) => {
                eventDetails.run(client, ...args);
            });
        }
    }
    console.log(`DJS-Handler > Loaded all events!`);
};
exports.eventHandler = eventHandler;
