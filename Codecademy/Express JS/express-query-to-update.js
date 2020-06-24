/* You may have noticed in express-put.js that our PUT route 
had no information about how to update the specified 
expression, just the id of which expression to update. It 
turns out that there was more information in the request in 
the form of a query string. Query strings appear at the end 
of the path in URLs, and they are indicated with a ? 
character. For instance, in /monsters/1?name=chimera&age=1, 
the query string is name=chimera&age=1 and the path is /
monsters/1/

Query strings do not count as part of the route path. 
Instead, the Express server parses them into a JavaScript 
object and attaches it to the request body as the value of 
req.query. The key: value relationship is indicated by the 
= character in a query string, and key-value pairs are 
separated by &. In the above example route, the req.query 
object would be { name: 'chimera', age: '1' }. */

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

// import helper function from /utils.js
// use updateElement() in your PUT /expressions/:id route
const { getElementById, getIndexById, updateElement,
        seedElements } = require('./utils');

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
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});