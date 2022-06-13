"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
class UserModel {
    constructor() {
        this.allUsers = async () => {
            const [users] = await this.connection.execute(`SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data as da
      LEFT JOIN User_address.address as ad
      ON da.id = ad.user_id`);
            return users;
        };
        this.connection = connection_1.default;
    }
}
exports.default = UserModel;
//# sourceMappingURL=userModel.js.map