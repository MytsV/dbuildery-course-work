const express = require('express');
const mysql = require('mysql2');
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
  uri: process.env.DB_STRING,
  password: process.env.DB_PASSWORD
});

const router = new express.Router();

router.get('/', async (req, res) => {
    res.status(200).send("Hello world!");
});

module.exports = router;