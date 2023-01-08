const getConnection = require('./db.js');

const exps = {
    readTasks: 'SELECT * FROM TASK',
    readSingleTask: 'SELECT * FROM TASK WHERE ID=<id>',
    createTask: 'INSERT INTO TASK(NAME, DESCRIPTION, DEADLINE, SECTION_ID) VALUES (<name>, <description>, <deadline>, 1)',
    updateTask: 'UPDATE TASK SET NAME=<name>, DESCRIPTION=<description>, DEADLINE=<deadline> WHERE ID=<id>'
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

const missingParamsResponse = {
    status: 422,
    error: 'Missing_Required_Parameters'
};

const notFoundResponse = {
    status: 404,
    error: 'Not_Found'
};

const getTasks = async (_, res) => {
    const result = await runSql(exps.readTasks);
    res.status(200).send(result);
};

const getSingleTask = async (req, res) => {
    if (!validateParams(['id'], req.params)) {
        return res.status(422).send(missingParamsResponse);
    }

    const result = await runSql(exps.readSingleTask, req.params);
    
    if (result.length > 0) {
        res.status(200).send(result[0]);
    } else {
        res.status(404).send(notFoundResponse);
    }
};

const createTask = async (req, res) => {
    if (!validateParams(['name', 'description'], req.body)) {
        return res.status(422).send(missingParamsResponse);
    }

    const resultCreation = await runSql(exps.createTask, req.body);
    const resultQuery = await runSql(exps.readSingleTask, {
        id: resultCreation.insertId
    });

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
            return res.status(422).send(missingParamsResponse);
        } else {
            return res.status(404).send(notFoundResponse);
        }
    }

    await runSql(exps.updateTask, values);
    const newTask = await runSql(exps.readSingleTask, values);
    
    res.status(200).send(newTask[0]);
};

module.exports = { getTasks, getSingleTask, createTask, updateTask };