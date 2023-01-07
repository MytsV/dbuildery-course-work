const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection({
    uri: process.env.DB_STRING,
    password: process.env.DB_PASSWORD
});

module.exports = db;