const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

// We can create a writeable stream to a file using 
// the fs.createWriteStream() method:
const fileStream = fs.createWriteStream('shoppingResults.txt');

/* Unlike a readable stream, which ends when it has no more data to 
read, a writable stream could remain open indefinitely. We can 
indicate the end of a writable stream with the .end() method. */
const transformData = (line) => {
  fileStream.write('They were out of: ' + line + '\n');
};

myInterface.on('line', transformData);