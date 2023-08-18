'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const Book = require('./models/books');

app.get('/books', async (request, response, next) => {

  const filterQuery = {};

  
})
app.get('/test', (request, response) => {

  response.send('test request received')

})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
