// cat.js
class Cat {
  constructor(name, clawStrength) {
    this.name = name;
    this.clawStrength = clawStrength;
  }
};

module.exports = Cat;



// dog.js 
class Dog {
  constructor(name, toothStrength) {
    this.name = name;
    this.toothStrength = toothStrength;
  }
};

module.exports = Dog;


// app.js
/* Node has several modules included within the environment 
to efficiently perform common tasks. These are known as the 
core modules. The core modules are defined within Node.js’s 
source and are located in the lib/ folder. Core modules are 
required by passing a string with the name of the module into 
the require() function */

// Require modules in:
let Dog = require('./dog.js');
let Cat = require('./cat');


let fight = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength) {
        console.log(`${dog.name} wins!`);
    }
    else if (dog.toothStrength < cat.clawStrength) {
        console.log(`${cat.name} wins!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`);

    }
}

const myDog = new Dog('Rex', Math.random());
const myCat = new Cat('Tabby', Math.random());

fight(myDog, myCat);