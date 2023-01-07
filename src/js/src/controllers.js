const getConnection = require('./db.js');

const exps = {
    readTasks: 'SELECT * FROM TASK',
    readSingleTask: 'SELECT * FROM TASK WHERE ID=<id>',
    createTask: 'INSERT INTO TASK(NAME, DESCRIPTION, DEADLINE) VALUES (<name>, <description>, <deadline>)'
};

const insertParams = (exp, params) => {
    if (!params) return exp;
    let newExp = exp;
    for (const [key, value] of Object.entries(params)) {
        newExp = newExp.replace('<' + key + '>', '\'' + value + '\'');
    }
    newExp = newExp.replace(/<.*>/, 'NULL');
    return newExp;
}

const runSql = async (exp, params) => {
    const connection = await getConnection();
    try {
        const expFormatted = insertParams(exp, params);
        const [ results ] = await connection.execute(expFormatted);
        return results;
    } catch (err) {
        console.log(err.toString());
    } finally {
        connection.end();
    }
}

const validate = (required, params) => {
    for (const value of required) {
        if (params[value] === undefined) return false;
    }
    return true;
}

const invalidResponse = {
    status: 400,
    error: 'Missing required parameters'
};

const getTasks = async (_, res) => {
    const result = await runSql(exps.readTasks);
    res.status(200).send(result);
};

const getSingleTask = async (req, res) => {
    if (!validate(['id'], req.params)) {
        return res.status(400).send(invalidResponse);
    }
    const result = await runSql(exps.readSingleTask, req.params);
    res.status(200).send(result);
};

const createTask = async (req, res) => {
    if (!validate(['name', 'description'], req.body)) {
        return res.status(400).send(invalidResponse);
    }
    const resultCreation = await runSql(exps.createTask, req.body);
    const resultQuery = await runSql(exps.readSingleTask, {
        id: resultCreation.insertId
    });
    res.status(200).send(resultQuery);
};

module.exports = { getTasks, getSingleTask, createTask };