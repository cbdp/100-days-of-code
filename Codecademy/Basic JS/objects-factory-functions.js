/* So far we’ve been creating objects individually, 
but now we want new instances of an object quickly. 
Here’s where factory functions come in. 

A factory function is a function that returns an object 
and can be reused to make multiple object instances. 
Factory functions can also have parameters allowing us 
to customize the object that gets returned.

Let’s say we wanted to create an object to represent 
monsters in JavaScript. To achieve this, we can use a 
factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name, age: age, energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }}};

In the monsterFactory function, it has four parameters 
and returns an object that has the properties: name, 
age, energySource, and scare(). To make an object that 
represents a specific monster like a ghost, we can call 
monsterFactory with the necessary arguments and assign 
the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // returns 'BOO!'

Now we have a ghost object as a result of calling 
monsterFactory() with the needed arguments. With monsterFactory 
in place, we can invoke the monsterFactory function with 
the necessary arguments. */

const robotFactory = (model, mobile) => {
  // Make function return object
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep(); // logs Beep Boop

/* ES6 introduced some new shortcuts for assigning 
properties to variables known as destructuring. One
of the techniques we can use with destructuring, is 
called property value shorthand. The above robotFactory
can  thusly be refactored as: */

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

/* much easier on the eyes */