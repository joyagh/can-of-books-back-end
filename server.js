'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));



async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
console.log('Mongoose connected successfully');
}
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;


const bookModel = require('./models/books');

app.get('/books', async (request, response, next) => {
let books = await bookModel.find()
response.status(200).send(books)
  

  
})
app.get('/test', (request, response) => {

  response.send('test request received')

})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
