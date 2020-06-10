"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const { NODE_ENV, SERVER_PROTOCOL, SERVER_HOST, SERVER_PORT } = app_1.default.get('config').env;
// Listen on the designated port found in the .env [use 'server' instead of 'app' if you have socket.io]
app_1.default.listen(SERVER_PORT || 4000, (err) => {
    if (err)
        throw new Error(`SERVER ERROR: ${err}`);
    // output the status of the app in the terminal
    const url = `${SERVER_PROTOCOL || 'http'}://${SERVER_HOST || 'localhost'}:${SERVER_PORT || 4000}`;
    console.info(`API is now running on ${url} in ${NODE_ENV || 'development'} mode`);
});
exports.default = app_1.default;
