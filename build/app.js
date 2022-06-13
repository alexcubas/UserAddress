"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const userRouter_1 = require("./router/userRouter");
class App {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.config();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
        this.app.use('/user', userRouter_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.warn('Listen on ', PORT));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map