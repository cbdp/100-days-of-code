/* In the previous challenge, bird had a public property name. It is 
considered public because it can be accessed and changed outside of 
bird's definition.

The simplest way to make this public property private is by creating a 
variable within the constructor function. This changes the scope of that 
variable to be within the constructor function versus available globally. 
This way, the variable can only be accessed and changed by methods also 
within the constructor function. */

function Bird() {
  let weight = 15; // private variable

  /* publicly available method that a bird object can use */
  this.getWeight = function() { 
    return weight;
  };
}
