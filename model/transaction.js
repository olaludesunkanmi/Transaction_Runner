const pool = require("../config/database");

const createTransactionTable = `DROP TABLE IF EXISTS transactions CASCADE;
  CREATE TABLE transactions (
    id SERIAL PRIMARY KEY NOT NULL,
    balance INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (id) references users (id) on delete CASCADE
  )`;

/**
 * User Table function
 * @returns {object} either error or success.
 */
module.exports = async () => {
  try {
    const create = await pool.query(createTransactionTable);
    console.log(`userTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
};
