/* HTTP follows a one request-one response cycle. 
Each client expects exactly one response per request, and 
each server should only send a single response back to the 
client per request.

Express servers send responses using the .send() method on 
the response object. .send() will take any input and include 
it in the response body. */

const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  // console.log(req);
  res.send(expressions);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
