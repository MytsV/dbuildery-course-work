const mysql = require('mysql2');
const config = require('./server_config.json');
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
  uri: config.db,
  password: process.env.DB_PASSWORD
});

connection.query(
  'SELECT * FROM `Role`',
  function(err, results, fields) {
    console.log(results);
  	connection.end()
});
