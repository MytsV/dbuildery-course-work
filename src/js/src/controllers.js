const getConnection = require('./db.js');

const exps = {
    readTasks: 'SELECT * FROM TASK',
    readSingleTask: 'SELECT * FROM TASK WHERE ID=<id>',
    createTask: 'INSERT INTO TASK(NAME, DESCRIPTION, DEADLINE, SECTION_ID) VALUES (<name>, <description>, <deadline>, 1)',
    updateTask: 'UPDATE TASK SET NAME=<name>, DESCRIPTION=<description>, DEADLINE=<deadline> WHERE ID=<id>',
    deleteTask: 'DELETE FROM TASK WHERE ID=<id>'
};

const NOT_FOUND_RESPONSE = {
    status: 404,
    error: 'Not_Found'
};

const MISSING_PARAMS_RESPONSE = {
    status: 422,
    error: 'Missing_Required_Parameters'
};

const SERVER_ERROR_RESPONSE = {
    status: 500,
    error: 'Server_Error'
};

const insertParams = (exp, params) => {
    if (!params) return exp;
    let newExp = exp;
    for (const [key, value] of Object.entries(params)) {
        newExp = newExp.replace('<' + key + '>', '\'' + value + '\'');
    }
    newExp = newExp.replace(/<[^<>]*>/g, 'NULL');
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

const validateParams = (required, params) => {
    for (const value of required) {
        if (params[value] === undefined) {
            return false;
        }
    }
    return true;
}

const getTasks = async (_, res) => {
    let result;
    try {
        result = await runSql(exps.readTasks);
    } catch (err) {
        return res.status(500).send(SERVER_ERROR_RESPONSE);
    }
    res.status(200).send(result);
};

const getSingleTask = async (req, res) => {
    if (!validateParams(['id'], req.params)) {
        return res.status(422).send(MISSING_PARAMS_RESPONSE);
    }

    let result;
    try {
        result = await runSql(exps.readSingleTask, req.params);
    } catch (err) {
        return res.status(500).send(SERVER_ERROR_RESPONSE);
    }
    
    if (result.length > 0) {
        res.status(200).send(result[0]);
    } else {
        res.status(404).send(NOT_FOUND_RESPONSE);
    }
};

const createTask = async (req, res) => {
    if (!validateParams(['name', 'description'], req.body)) {
        return res.status(422).send(MISSING_PARAMS_RESPONSE);
    }

    let resultQuery;
    try {
        const resultCreation = await runSql(exps.createTask, req.body);
        resultQuery = await runSql(exps.readSingleTask, {
            id: resultCreation.insertId
        });
    } catch (err) {
        return res.status(500).send(SERVER_ERROR_RESPONSE);
    }
    
    res.status(200).send(resultQuery);
};

const getUpdateValues = async (req) => {
    const task = await runSql(exps.readSingleTask, req.params);
    const values = {...task[0], ...req.params, ...req.body};
    return values;
};

const updateTask = async (req, res) => {
    const values = await getUpdateValues(req);

    if (!validateParams(['id', 'name', 'description', 'deadline'], values)) {
        if (!values.id) {
            return res.status(422).send(MISSING_PARAMS_RESPONSE);
        } else {
            return res.status(404).send(NOT_FOUND_RESPONSE);
        }
    }

    let updatedResult;
    try {
        await runSql(exps.updateTask, values);
        updatedResult = await runSql(exps.readSingleTask, values);
    } catch (err) {
        return res.status(500).send(SERVER_ERROR_RESPONSE);
    }
    
    res.status(200).send(updatedResult[0]);
};

const deleteTask = async (req, res) => {
    if (!validateParams(['id'], req.params)) {
        return res.status(422).send(MISSING_PARAMS_RESPONSE);
    }

    let result;
    try {
        result = await runSql(exps.deleteTask, req.params);
    } catch (err) {
        return res.status(500).send(SERVER_ERROR_RESPONSE);
    }
    
    if (result.affectedRows != 0) {
        res.status(200).send({
            status: 200,
            message: 'Success'
        });
    } else {
        res.status(404).send(NOT_FOUND_RESPONSE);
    }
};

module.exports = { getTasks, getSingleTask, createTask, updateTask, deleteTask };