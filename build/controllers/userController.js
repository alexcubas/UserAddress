"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
class UserController {
    constructor() {
        this.userService = new userService_1.default;
    }
    async allUsers(_req, res) {
        const { code, data } = await this.userService.allUsers();
        return res.status(code).json(data);
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map