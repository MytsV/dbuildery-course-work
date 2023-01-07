const mysql = require('mysql2');

const connectionUrl = 'mysql://root:@localhost:3306/dbuildery'

// create the connection to database
const connection = mysql.createConnection({
  uri: connectionUrl,
  password: "Haven'tCalledSaul"
});

connection.query(
  'SELECT * FROM `Role`',
  function(err, results, fields) {
    console.log(results);
  	connection.end()
});
