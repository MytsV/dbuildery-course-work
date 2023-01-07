const db = require("./db.js");

const getTask = async (req, res) => {
    res.status(200).send("Hello world!");
};

module.exports = { getTask };