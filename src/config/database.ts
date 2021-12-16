import { Pool } from 'pg';

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

const client = new Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
});

export default client;
