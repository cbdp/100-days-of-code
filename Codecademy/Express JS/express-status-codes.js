/* Express allows us to set the status code on responses 
before they are sent. Response codes provide information to 
clients about how their requests were handled. Until now, we 
have been allowing the Express server to set status codes for
us. For example, any res.send() has by default sent a 200 OK 
status code. 

The res object has a .status() method to allow us to set the 
status code, and other methods like .send() can be chained 
from it.*/ 

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send('Expression not found')
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
