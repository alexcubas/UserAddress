"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
class UserController {
    constructor() {
        this.userService = new userService_1.default;
    }
    async userById(req, res) {
        const { id } = req.params;
        const { code, data } = await this.userService.userById(Number(id));
        return res.status(code).json(data);
    }
    async allUsers(_req, res) {
        const { code, data } = await this.userService.allUsers();
        return res.status(code).json(data);
    }
    async createUser(req, res) {
        const { code, data } = await this.userService.createUser(req.body);
        return res.status(code).json(data);
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map