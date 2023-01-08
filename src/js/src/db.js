const mysql = require('mysql2/promise');
require('dotenv').config();

const getConnection = async () => await mysql.createConnection({
  uri: process.env.DB_STRING,
  password: process.env.DB_PASSWORD,
});

module.exports = getConnection;
