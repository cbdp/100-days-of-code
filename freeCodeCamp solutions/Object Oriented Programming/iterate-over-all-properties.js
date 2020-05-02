/* You have now seen two kinds of properties: own properties and 
prototype properties. Own properties are defined directly on the object 
instance itself. And prototype properties are defined on the prototype.
*/

function Dog(name) {
  this.name = name;
};

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
let ownPropsArray = [];
let prototypePropsArray = [];

// Only change code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownPropsArray.push(property);
  } else {
    prototypePropsArray.push(property);
  };
};

console.log(prototypePropsArray); // prints prototype properties
console.log(ownPropsArray); // prints own properties 