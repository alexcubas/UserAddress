import { IUser } from '../interface/IUser';
import { OkPacket, Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  userById = async (id: number) => {
    const [user] = await this.connection.execute<RowDataPacket[]>(
      `SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data AS da
      JOIN User_address.address AS ad
      ON da.id = ad.user_id
      WHERE da.id = ?`,
      [id]
    )
    return user
  }

  allUsers = async () => {
    const [users] = await this.connection.execute<RowDataPacket[]>(
      `SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data as da
      JOIN User_address.address as ad
      ON da.id = ad.user_id`,
    )
    return users
  }

  createUser = async (user: IUser) => {
    const [users] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO User_address.data (nome, email)
      VALUES (?, ?)`,
      [user.nome, user.email]
    )
    await this.connection.execute<ResultSetHeader>(
      `INSERT INTO User_address.address (user_id, CEP, logradouro, bairro, localidade, UF)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [users.insertId, user.CEP, user.logradouro, user.bairro, user.localidade, user.UF]
    )
  }
}