import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Address extends Model {
  public id!: number;

  public user_id: number;

  public CEP: string;

  public logradouro: string;

  public bairro: string;

  public localidade: string;

  public UF: string;
}

Address.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: INTEGER,
    allowNull: false,
  },
  cep: {
    type: STRING,
    allowNull: false,
  },
  logradouro: {
    type: STRING,
    allowNull: false,
  },
  bairro: {
    type: STRING,
    allowNull: false,
  },
  localidade: {
    type: STRING,
    allowNull: false,
  },
  uf: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'address',
  timestamps: false,
  freezeTableName: true
});

export default Address;
