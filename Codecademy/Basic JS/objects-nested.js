/* We can chain operators to access nested properties. 
We’ll have to pay attention to which operator makes sense to 
use in each layer. It can be helpful to pretend you are the 
computer and evaluate each expression from left to right so 
that each operation starts to feel a little more manageable.

In application code, objects are often nested— an object 
might have another object as a property which in turn could 
have a property that’s an array of even more objects! */

let spaceship = {
  passengers: [
    {
      name: 'Mungo',
      class: 3,
    }, {
      name: 'Monkey',
      class: 2,
    }, {
      name: 'Business Goose',
      class: 1,
    },
    ],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

// 'cookies'
let capFave = spaceship.crew.captain['favorite foods'][0];

// 'Mungo' obj
let firstPassenger = spaceship.passengers[0];