/* Objects are passed by reference. This means when we pass 
a variable assigned to an object into a function as an 
argument, the computer interprets the parameter name as 
pointing to the space in memory holding that object. As a 
result, functions which change object properties actually 
mutate the object permanently (even when the object is 
assigned to a const variable). 

Functions can permanently mutate the objects properties, 
however, reassignment of the object as a variable in itself 
would fail. Below is how to change: */

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// How to mutate
const greenEnergy = obj => obj['Fuel Type'] = 'avocado oil'; 
const remotelyDisable = obj => obj.disabled = true;

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)

// How not to mutate
let tryReassignment = obj => {
  obj = {
    'Fuel Type': 'blood oil', 
    disabled: false,
  }
};
tryReassignment(spaceship);
console.log(spaceship);