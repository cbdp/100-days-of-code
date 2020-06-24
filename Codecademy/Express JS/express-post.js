/* POST is the HTTP method verb used for creating new 
resources. Because POST routes create new data, their paths 
do not end with a route parameter, but instead end with the 
type of resource to be created.

For example, to create a new monster, a client would make a 
POST request to /monsters. The client does not know the id of 
the monster until it is created and sent back by the server, 
therefore POST /monsters/:id doesn’t make sense because a 
client couldn’t know the unique id of a monster before it 
exists.

Express uses .post() as its method for POST requests. POST 
requests can use many ways of sending data to create new 
resources, including query strings.

The HTTP status code for a newly-created resource is:
201 Created. */

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

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
// HERE
app.post('/expressions', (req, res, next) => {
  const newExpression = createElement('expressions', req.query);
  if (newExpression) {
    expressions.push(newExpression);
    res.status(201).send(newExpression);
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
