const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dataJs = require('./data');

const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* Implement your routes here */

app.get('/', (req, res) => {

    let dataJsJson = dataJs;

    res.send(dataJsJson);
});


app.get('/getDataFromServer', (req, res) => {

    let dataJsJson = dataJs;

    res.send(dataJsJson);
});



module.exports = app;
