/* Routes become much more powerful when they can be used 
dynamically. Express servers provide this functionality with 
named route parameters. Parameters are route path segments 
that begin with : in their Express route definitions. They 
act as wildcards, matching any text at that path segment

Express parses any parameters, extracts their actual values, 
and attaches them as an object to the request object: req.
params. This object’s keys are any parameter names in the 
route, and each key’s value is the actual value of that field 
per request. */

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
  res.send(foundExpression);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
