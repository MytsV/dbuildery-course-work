const db = require("./db.js");

const getTasks = async (req, res) => {
    db.query("SELECT * FROM `Task`", (err, result) => {
        res.status(200).send(result);
    });
};

module.exports = { getTasks };