const express = require('express');
const controllers = require('./controllers.js');

const router = new express.Router();

router.get('/task', controllers.getTasks);

module.exports = router;