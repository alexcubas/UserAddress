"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
class UserService {
    constructor() {
        this.userModel = new userModel_1.default;
    }
    async userById(id) {
        const result = await this.userModel.userById(id);
        if (result.length === 0)
            return { code: 409, data: { message: "Usuário inexistente" } };
        return { code: 200, data: result };
    }
    async allUsers() {
        const result = await this.userModel.allUsers();
        return { code: 200, data: result };
    }
    async createUser(users) {
        await this.userModel.createUser(users);
        return { code: 201, data: 'Usuário criado com sucesso' };
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map