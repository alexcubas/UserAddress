"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    cep: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    logradouro: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    bairro: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    localidade: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    uf: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'address',
    timestamps: false,
    freezeTableName: true
});
exports.default = Address;
//# sourceMappingURL=address.js.map