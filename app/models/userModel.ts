import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  allUsers = async () => {
    const [users] = await this.connection.execute<RowDataPacket[]>(
      `SELECT da.nome, da.email, ad.CEP, ad.logradouro, ad.bairro, ad.localidade, ad.UF
      FROM User_address.data as da
      LEFT JOIN User_address.address as ad
      ON da.id = ad.user_id`,
    )
    return users
  }
}