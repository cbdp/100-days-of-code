/* It’s best practice to create named event handler 
functions, instead of anonymous functions. Your code will 
remain organized and reusable this way, even if your code 
gets complex. 

Example:
let eventHandlerFunction = () => {};
eventTarget.onclick = eventHandlerFunction;

The .addEventListener() method is another common syntax for 
registering event handlers. An event listener waits for a 
specific event to occur and calls a named event handler 
function to respond to it. This method requires two arguments:

- The event type as a string
- The event handler function

Example:
eventTarget.addEventListener('click', eventHandlerFunction);

You’ll want to use the .addEventListener() method to allow 
multiple event handlers to be registered to a single event 
without changing its other event handlers. */

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

//// my code ////

const textChange = () => {
  view.innerHTML = 'Hello, World!';
};

const textReturn = () => {
  view.innerHTML = 'View';
};

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);