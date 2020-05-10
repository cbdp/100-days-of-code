// my solve
const spinalCase = str => 
  str
    .replace(/([A-Z])/g, ' $1')
    .split(/\W|_/g)
    .filter(x => x)
    .join('-')
    .toLowerCase();

// testing
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// found this regex solution in the docs afterwards:
let regEx = /\s|_|(?=[A-Z])/;
// it does not require .replace or .filter