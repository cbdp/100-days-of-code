/* Your Expressions/Animals routes are all working 
well, and our machine is fully functional! Our app.js 
file, however, is getting quite long and hard to read. 
It’s easy to imagine that as we add functionality to 
an application, this file would get long and cumbersome.

Luckily, Express provides functionality to alleviate 
this problem: Routers. Routers are mini versions of 
Express applications — they provide functionality for 
handling route matching, requests, and sending responses, 
but they do not start a separate server or listen on their 
own ports. Routers use all the .get(), .put(), .post(), 
and .delete() routes that you know and love.

In this lesson, we will use Routers to clean up our code 
and separate our application into a file to handle all 
/expressions routes, and another to handle all /animals 
routes. */


// Enter the Express.Router

/* An Express router provides a subset of Express methods. 
To create an instance of one, we invoke the .Router() 
method on the top-level Express import.

To use a router, we mount it at a certain path using 
app.use() and pass in the router as the second argument. 
This router will now be used for all paths that begin with 
that path segment. To create a router to handle all requests 
the code from express-CRUD-routes.js would look like this: */

const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

// the new Router
const expressionsRouter = express.Router();
app.use('/expressions', expressionsRouter);

// Get all expressions without the Router
/* app.get('/expressions', (req, res, next) => {
  res.send(expressions);
}); */

// Get all expressions with the Router
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});


/* Multiple Router Files
Generally, we will keep each router in its own file, 
and require them in the main application. This allows 
us to keep our code clean and our files short. 

Like so: 

// expressions.js
const express = require('express');
const { seedElements, getElementById, createElement, updateElement, getIndexById } = require('./utils');

let expressions = [];
seedElements(expressions, 'expressions');

const expressionsRouter = express.Router();

module.exports = expressionsRouter;

// Get all expressions
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});

////////////////////////////////////////////////////

// app.js
const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

let animals = [];
seedElements(animals, 'animals');

const expressionsRouter = require('./expressions.js');

app.use('/expressions', expressionsRouter);

*/