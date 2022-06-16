"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// import OtherModel from './OtherModel';
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
    CEP: {
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
    UF: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'address',
    timestamps: false,
});
// Address.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
// Address.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });
// Teams.hasMany(Address, { foreignKey: 'homeTeam', as: 'teamHome' });
// Teams.hasMany(Address, { foreignKey: 'awayTeam', as: 'teamAway' });
/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */
// OtherModel.belongsTo(Address, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Address, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
// Address.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Address.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
exports.default = Address;
//# sourceMappingURL=matches.js.map