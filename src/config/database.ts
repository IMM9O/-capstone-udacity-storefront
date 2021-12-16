import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_HOST,
  DB_DATABASE_DEV,
  DB_DATABASE_TEST,
  DB_DATABASE_PROD,
  DB_USER,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

console.log(NODE_ENV);

const getDatabaseName = (env: string) => {
  switch (env) {
    case 'DEV': {
      return DB_DATABASE_DEV;
    }
    case 'TEST': {
      return DB_DATABASE_TEST;
    }
    case 'PROD': {
      return DB_DATABASE_PROD;
    }
  }
};

const client = new Pool({
  host: DB_HOST,
  database: getDatabaseName(NODE_ENV as string),
  user: DB_USER,
  password: DB_PASSWORD,
});

export default client;
