const dotenv = require("dotenv");

module.exports = {
  development: {
    user: "postgres",
    host: "127.0.0.1",
    database: process.env.DEV_DB,
    password: process.env.DB_PASS,
    port: 5432,
  },
  test: {
    user: "postgres",
    host: "127.0.0.1",
    database: process.env.TEST_DB,
    password: process.env.DB_PASS,
    port: 5432,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
  },
};
