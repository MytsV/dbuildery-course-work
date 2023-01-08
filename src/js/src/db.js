const mysql = require('mysql2/promise');
//Config is situated in .env file, which is not commited for security
require('dotenv').config();

const getConnection = async () => await mysql.createConnection({
  uri: process.env.DB_STRING,
  password: process.env.DB_PASSWORD,
});

module.exports = getConnection;
