// callbackFile.js

const fs = require('fs');

/* We invoked http.createServer() with our requestListener 
callback. This is similar to running the .on() of an 
EventEmitter: the requestListener will execute whenever an 
HTTP request is sent to the server on the correct port.

Within the requestListener callback, we make changes to the 
response object, response, so that it can send the appropriate 
information to the client sending the request. The status code 
200 means that no errors were encountered. The header 
communicates that the file type is text, rather than something 
like audio or compressed data. */

module.exports = {
  requestListener: (req, res) => {
  fs.readFile('./myWebsite.html',  'utf-8', (err, data) => {
    if (err){
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${err}`);
    res.end();
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
    }
  })
}
}



// myWebsite.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
</head>

<body>
    <h1>I'm hosting this website with my own Node web server</h1>
    <h2>Pretty exciting stuff...</h2>              
</body>

</html>



// app.js 

/* the http module contains functions which simplify 
interacting with HTTP and streamline receiving and 
responding to requests. */

const http = require('http');

/* The http.createServer() method returns an instance of an 
http.server. An http.server has a method .listen() which 
causes the server to “listen” for incoming connections. When 
we run http.createServer() we pass in a custom callback 
function (often referred to as the requestListener). This 
callback function will be triggered once the server is 
listening and receives a request. */

/* Let’s break down how the requestListener callback 
function works: 

1. The function expects two arguments: 
a request object and a response object: 
2. Each time a request to the server is made, 
Node will invoke the provided requestListener callback 
function, passing in the request and response objects 
of the incoming request.
3. Request and response objects come with a number of 
properties and methods of their own, and within the 
requestListener function, we can access information 
about the request via the request object passed in.
4. The requestListener is responsible for setting 
the response header and body.
5. The requestListener must signal that the interaction 
is complete by calling the response.end() method. */

let { requestListener } = require('./callbackFile.js');
// specify which port
const PORT = process.env.PORT || 4001;
// create server
const server = http.createServer(requestListener);
// start server
server.listen(PORT);
