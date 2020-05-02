/*
name and numLegs are called own properties, because they are defined 
directly on the instance object. That means that canary has its own 
separate copy of these properties. In fact every instance of Bird will 
have its own copy of these properties.
*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
console.log(canary);

// Add the own properties of canary to the array ownProps.
for (let randomVariable in canary) {
  if(canary.hasOwnProperty(randomVariable)) {
    ownProps.push(randomVariable);
  };
};

console.log(ownProps);