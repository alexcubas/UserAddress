import * as dotenv from 'dotenv';
import * as mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

export default connection;