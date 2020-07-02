/* When the data stored on an object is a function we call 
that a method. A property is what an object has, while a 
method is what an object does.

Do object methods seem familiar? That’s because you’ve been
using them all along! For example console is a global 
javascript object and .log() is a method on that object. 
Math is also a global javascript object and .floor() is a 
method on it.

We can include methods in our object literals by creating 
ordinary, comma-separated key-value pairs. The key serves 
as our method’s name, while the value is an anonymous 
function expression. */

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
  crew: 98,
  'engineType': 'gazoinksatronic',
};

console.log(alienShip.crew);
alienShip.retreat();
alienShip.takeOff();