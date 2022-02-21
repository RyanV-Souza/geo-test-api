const express = require('express');
const app = express();
const bp = require('body-parser')

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/', index);
app.use('/person', personRoute);

module.exports = app;