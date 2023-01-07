const express = require('express');
const controllers = require('./controllers.js');

const router = new express.Router();

router.get('/task', controllers.getTasks);
router.post('/task', controllers.createTask);

module.exports = router;