function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Set the prototype of the subtype (or child)
// to be an instance of Animal:
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// and test:
console.log(beagle.eat());