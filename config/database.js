const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

let connect;

if (process.env.NODE_ENV === "test" || "development") {
  connect = {
    connectionString: process.env.TESTDB_URL,
  };
}

connect = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(connect);

pool.on("error", (err, client) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("Database connection succesful!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
