"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../database/models/users");
const address_1 = require("../database/models/address");
class UserService {
    constructor(users = users_1.default, address = address_1.default) {
        this.users = users;
        this.address = address;
    }
    async userById(id) {
        const result = await this.users.findOne({ where: { id },
            include: [
                { model: address_1.default, as: 'address', attributes: { exclude: ['id', 'user_id'] } }
            ]
        });
        if (!result)
            return { code: 409, data: { message: "Usuário inexistente" } };
        return { code: 200, data: result };
    }
    async allUsers() {
        const result = await this.users.findAll({
            include: [
                { model: address_1.default, as: 'address', attributes: { exclude: ['id', 'user_id'] } }
            ]
        });
        return { code: 200, data: result };
    }
    async createUser(users) {
        const emailExist = await this.users.findOne({ where: { email: users.email } });
        const cepExist = await this.address.findOne({ where: { cep: users.CEP } });
        if (cepExist && emailExist)
            return { code: 200, data: {
                    nome: users.nome,
                    email: users.email,
                    CEP: users.CEP,
                    logradouro: users.logradouro,
                    bairro: users.bairro,
                    localidade: users.localidade,
                    UF: users.UF
                } };
        const newUser = await this.users.create({ nome: users.nome, email: users.email });
        const newAddress = await this.address.create({ user_id: newUser.id, cep: users.CEP, logradouro: users.logradouro,
            bairro: users.bairro, localidade: users.localidade, uf: users.UF
        });
        return { code: 201, data: {
                nome: users.nome,
                email: users.email,
                CEP: users.CEP,
                logradouro: newAddress.logradouro,
                bairro: newAddress.bairro,
                localidade: newAddress.localidade,
                UF: users.UF
            } };
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map