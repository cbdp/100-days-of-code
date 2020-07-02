/* Objects are mutable meaning we can update them after 
we create them!

We can use either dot notation, ., or bracket notation, [], 
and the assignment operator, = to add new key-value pairs to 
an object or change an existing property. */

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 5;
delete spaceship['Secret Mission'];