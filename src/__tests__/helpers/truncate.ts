import Client from '../../config/database';

export const resetSequence = async (tableName: string) => {
  try {
    const conn = await Client.connect();
    const sql = `ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`;
    const result = await conn.query(sql);
    return !!result;
  } catch (err) {
    throw new Error(`Cannot inset into products ${err}`);
  }
};
