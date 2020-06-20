/* Event-Driven Architecture
In traditional imperative programming, we give the computer a 
series of instructions to execute in a pre-defined order. In 
contrast, when we write web applications, we often need to 
write logic to handle situations without knowing exactly when 
they’ll occur. For example, when programming a website, we 
might provide functionality for a click event without knowing 
when a user will trigger it. When Node was created, it 
applied this same concept of event-driven principles to the 
back-end environment. 

Node provides an EventEmitter class which we can access by 
requiring in the events core module: */

/* Here we require in the 'events' module and save a 
reference to it in an events variable */
let events = require('events');

/* a function listenerCallback which expects to be passed 
data and will log a string to the console which incorporates 
that data */
let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Assign the listenerCallback function as the listener 
// callback for 'celebration' events
myEmitter.on('celebration', listenerCallback);

// Let’s emit a 'celebration' event! 
myEmitter.emit('celebration', 'and dance so free!');