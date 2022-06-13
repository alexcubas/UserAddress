"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
class UserModel {
    constructor() {
        this.userById = async (id) => {
            const [user] = await this.connection.execute(`SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data AS da
      JOIN User_address.address AS ad
      ON da.id = ad.user_id
      WHERE da.id = ?`, [id]);
            return user;
        };
        this.allUsers = async () => {
            const [users] = await this.connection.execute(`SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data as da
      JOIN User_address.address as ad
      ON da.id = ad.user_id`);
            return users;
        };
        this.createUser = async (user) => {
            const [users] = await this.connection.execute(`INSERT INTO User_address.data (nome, email)
      VALUES (?, ?)`, [user.nome, user.email]);
            await this.connection.execute(`INSERT INTO User_address.address (user_id, CEP, logradouro, bairro, localidade, UF)
      VALUES (?, ?, ?, ?, ?, ?)`, [users.insertId, user.CEP, user.logradouro, user.bairro, user.localidade, user.UF]);
        };
        this.connection = connection_1.default;
    }
}
exports.default = UserModel;
//# sourceMappingURL=userModel.js.map