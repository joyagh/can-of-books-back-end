"use strict";

const mongoose = require("mongoose");
require("dotenv").config();


main().catch(err => console.log(err));

console.log(process.env.DATABASE_URL);

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Mongoose connected successfully");
}
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;


const bookModel = require('./models/books');

app.get('/books', async (request, response, next) => {
let books = await bookModel.find()
response.status(200).send(books)
});

app.post('/books', async (request, response) => {
  let { title, description, status } = request.body;
  let newBook = await bookModel.create({ title, description, status });
  response.send(newBook);
});

app.delete('/books/:id', async (request, response) => {
  await bookModel.findByIdAndDelete(request.params.id);
  response.send('Deleted!');
});

app.put('/books/:id', async (request, response) => {
  let options = {
    new: true,
  }
  let books_id = books._id;
  let updatedBook = await bookModel.findByIdAndUpdate(books_id, { Firm Commitments }, options);
console.log(printBooks(updatedBook));
}); 


app.get('/test', (request, response) => {

  response.send('test request received')

})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
