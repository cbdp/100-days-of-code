// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let newArray = [...arr]; // see notes at the end of this code
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let anotherArray = [...arr];
  var book_index = anotherArray.indexOf(bookName);
  if (book_index >= 0) {

    anotherArray.splice(book_index, 1);
    return anotherArray;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/* Why Can’t I Use = to Copy an Array?

Because arrays in JS are reference values, so when you try to copy it using the = it will 
only copy the reference to the original array and not the value of the array. To create a 
real copy of an array, you need to copy over the value of the array under a new value 
variable. That way this new array does not reference to the old array address in memory.

Example: */
const sheeps = ['sheep1', 'sheep2', 'sheep3'];

const fakeSheeps = sheeps;
const cloneSheeps = [...sheeps];

console.log(sheeps === fakeSheeps);
// true --> it's pointing to the same memory space

console.log(sheeps === cloneSheeps);
// false --> it's pointing to a new memory space