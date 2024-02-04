const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { getAnimals, createAnimal,  updateAnimal, deleteAnimal} = require('./controler');

const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* Implement your routes here */
app.get('/data', getAnimals);

app.post('/data', createAnimal);

app.put('/data/:id', updateAnimal);

app.delete('/data/:id', deleteAnimal);


module.exports = app;
