const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server_config.json');

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes'));

app.listen(config.port, () => {
  console.log(`Started on http://localhost:${config.port}`);
});
