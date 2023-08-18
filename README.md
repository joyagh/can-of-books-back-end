# Start your own "Can of Books" App

This repository has starter code to begin work on creating your own online bookshelf.

## What can books do?

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Build out this code base to create an web app to track what books have impacted you, and what's recommended to read next.

## Use this template

**Author**: Bianca Chery, Gerard Johnson, Justine Oyaghiro
**Version**: 1.0.0 


## Getting Started
Set up your MongoDB database by providing the connection URL. Open the seed.js file and replace the following line with your actual MongoDB connection URL. Customize the book data in the seed.js file. You can modify the book titles, descriptions, and statuses to fit your needs.

## Architecture
Node.js: Node.js is a JavaScript runtime that allows you to execute JavaScript code on the server-side. In your code, you are using Node.js to run the book seeding script.

Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for working with MongoDB and allows you to define data models and interact with the database using JavaScript objects.

MongoDB: MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is a document-oriented database, and in your code, you are using Mongoose to define a Book schema and interact with the MongoDB database.

Book Model: You are defining a Book model using Mongoose. The model specifies the structure of the data that will be stored in the database, including properties like title, description, and status.

Seeding Script: The provided code is a seeding script that populates the MongoDB database with sample book data. It creates instances of the Book model and saves them to the database using Mongoose's methods.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Estimates
Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____


## Credit and Collaborations

