"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const loadCommands_1 = require("./Functions/loadCommands");
const CommandHandler_1 = require("./Handlers/CommandHandler");
const EventHandler_1 = require("./Handlers/EventHandler");
class DJSHandler extends events_1.EventEmitter {
    constructor(client, options) {
        super();
        this._commands = "commands";
        this._events = "events";
        this._prefix = "!";
        this.init(client, options);
    }
    init(client, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!client) {
                throw new Error("DJS-Handeler > No valid Discord Client is Provided Please check it!");
                return;
            }
            if (!options.commandsDir) {
                console.warn("DJS-Handler > No commands dir is provided using the default commands folder!");
                options.commandsDir = this._commands;
            }
            if (!options.eventsDir) {
                console.warn("DJS-Handler > No events dir is provided using the default commands folder!");
                options.eventsDir = this._events;
            }
            if (!options.prefix) {
                console.warn('DJS-Handler > No prefix is provided so using the default prefic "!"');
                options.prefix = this._prefix;
            }
            (0, EventHandler_1.eventHandler)(client, options.eventsDir);
            (0, CommandHandler_1.CommandHandler)(options.commandsDir, client);
            (0, loadCommands_1.loadCommands)(client, options.prefix);
        });
    }
}
exports.default = DJSHandler;
