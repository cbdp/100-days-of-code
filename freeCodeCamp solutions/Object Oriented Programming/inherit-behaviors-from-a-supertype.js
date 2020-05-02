/* In the previous challenge, you created a supertype called Animal that 
defined behaviors shared by all animals: */
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

/* This and the next challenge will cover how to reuse Animal's methods 
inside Bird and Dog without defining them again. It uses a technique 
called inheritance. This challenge covers the first step */

// Use Object.create to make two instances of Animal (duck and beagle).
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// see: Set the Child's Prototype to an Instance of the Parent.js for more