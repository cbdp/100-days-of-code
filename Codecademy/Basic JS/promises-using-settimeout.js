console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('This is a string delayed by 2000 ms.');
};

setTimeout(usingSTO, 2000);

console.log("This is the last line of code in app.js.");

/* $ node promises-using-settimeout.js outputs:

This is the first line of code in app.js.
This is the last line of code in app.js.
This is a string delayed by 2000 ms.

*/