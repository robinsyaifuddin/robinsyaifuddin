const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost", // ganti sesuai server
  user: "postgres",  // ganti sesuai user
  password: "password", // ganti sesuai password
  database: "robinsyaifuddin_db",
  port: 5432,
});

module.exports = pool;
