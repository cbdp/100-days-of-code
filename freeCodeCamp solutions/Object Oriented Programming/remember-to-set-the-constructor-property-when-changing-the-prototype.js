/* There is one crucial side effect of manually setting the prototype to 
a new object. It erases the constructor property! This property can be 
used to check which constructor function created the instance, but since 
the property has been overwritten, it now gives false result

To fix this, whenever a prototype is manually set to a new object, 
remember to define the constructor property
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // like this
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
