"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
class UserService {
    constructor() {
        this.userModel = new userModel_1.default;
    }
    async allUsers() {
        const result = await this.userModel.allUsers();
        return { code: 200, data: result };
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map