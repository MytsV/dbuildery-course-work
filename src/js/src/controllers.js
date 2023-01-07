const getConnection = require('./db.js');

const exps = {
    readTasks: 'SELECT * FROM TASK'
};

const execute = async (exp, values) => {
    const connection = await getConnection();
    const [ results, fields ] = await connection.execute(exp);
    return results;
}

const getTasks = async (req, res) => {
    res.status(200).send(await execute(exps.readTasks));
};

const createTask = async (req, res) => {
    const values = extend({}, req.body, req.params);
    console.log(values);
    // db.query(`INSERT INTO TASK(ID, NAME, DESCRIPTION, DEADLINE) VALUES (${values.id}, :name, :description, :deadline)`, (err, result) => {
    //     res.status(200).send(result);
    // });
};

module.exports = { getTasks, createTask };