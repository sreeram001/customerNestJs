"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv = require("dotenv");
class Config {
    constructor() {
        dotenv.config();
        this.PORT = Number(process.env.PORT);
        this.MONGO_URI = process.env.MONGO_URI;
    }
}
exports.AppConfig = new Config();
//# sourceMappingURL=index.js.map