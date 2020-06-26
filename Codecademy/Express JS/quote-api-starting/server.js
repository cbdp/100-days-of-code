const express = require('express');
const app = express();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// UTILS

// my return all quotes from query filter
const findAuthor = (author, quoteArray) => quoteArray.filter(x => x.person == author);

// Quote constructor for my POST route
class Quote {
  constructor(quote, person) {
    this.quote = quote;
    this.person = person;
  }
};


// ROUTES

// Your API should have a GET /api/quotes/random route.
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

// Your API should have a GET /api/quotes route.
// If there is a query string with a person attribute, 
// route should return all quotes said by same person. 
app.get('/api/quotes', (req, res, next) => {
    if (req.query.person) {
        const getPerson = findAuthor(req.query.person, quotes);
        res.send({quotes: getPerson});
    } else {
        res.send({ quotes });
    }
});

// Your API should have a POST /api/quotes route
app.post('/api/quotes', (req, res, next) => {
    if (req.query.quote, req.query.person) {
        let newQuote = new Quote(req.query.quote, req.query.person);
        quotes.push(newQuote);
        res.status(201).send({quote: newQuote});
    } else {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});


/* APP EXTENSION SUGGESTIONS
Add a PUT route for updating quotes in the data. This might 
require adding some sort of unique ID for each quote in the 
array in data.js.

Add a DELETE route for deleting quotes from the data array. 
As with PUT, this might require adding IDs to the data array 
and using req.params. For both of these ideas, you’ll be able 
to interact via Postman.

Add other data to the array, such as the year of each quote, 
and try to display it on the front-end.

Add another resource to your API in addition to quotes, such 
as biographical blurbs (you’ll need to find your own data for 
this new resource). Use Express Routers to keep your code 
simple and separated into different files for each router. */