import Client from '../../config/database';

export const resetSequence = async (tableName: string) => {
  try {
    const conn = await Client.connect();
    const sql = `ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`;
    console.log(sql);
    await conn.query(sql);
  } catch (err) {
    throw new Error(`Cannot inset into products ${err}`);
  }
};
