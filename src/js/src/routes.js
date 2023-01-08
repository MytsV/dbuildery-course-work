const express = require('express');
const controllers = require('./controllers.js');

const router = new express.Router();

router.get('/task', controllers.getTasks);
router.get('/task/:id', controllers.getSingleTask);
router.post('/task', controllers.createTask);
router.put('/task/:id', controllers.updateTask);

module.exports = router;