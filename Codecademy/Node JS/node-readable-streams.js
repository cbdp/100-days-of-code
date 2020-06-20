// shoppingList.txt
apples
pears
royal jelly
bread
milk
tofu
beans
flan


// app.js
/* One of the simplest uses of streams is reading and writing 
to files line-by-line. To read files line-by-line, we can use 
the .createInterface() method from the readline core module. 
.createInterface() returns an EventEmitter set up to emit 'line' 
events */

// require in the readline and fs core modules.
const readline = require('readline');
const fs = require('fs');

// assign to myInterface the returned value from invoking readline.
// createInterface() with an object containing designated input.
const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

//  create a listener callback function to use in the next step.
const printData = (data) => {
  console.log('Item: ' + data);
};

myInterface.on('line', printData);

