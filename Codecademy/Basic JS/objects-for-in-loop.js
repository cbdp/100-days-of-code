/* Loops are programming tools that repeat a block of code 
until a condition is met. We learned how to iterate through 
arrays using their numerical indexing, but the key-value 
pairs in objects aren’t ordered!

for...in loops will execute a given block of code for each 
property in an object. */

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewRole in spaceship.crew) {
  console.log(crewRole + ': ' + spaceship.crew[crewRole].name);
};

for (let crewDegree in spaceship.crew) {
  console.log(`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`)
};