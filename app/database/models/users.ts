import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Address from './address';

class Users extends Model {
  public id!: number;

  public nome: string;

  public email: string;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

Users.hasOne(Address, { foreignKey: 'id', as: 'address' });

export default Users;
