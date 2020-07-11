// Transpilation is the process of converting one 
// programming language to another,
// in this case, ES6 to ES5 with babel.

var pasta = "Spaghetti"; // ES5 syntax
const meat = "Pancetta"; // ES6 syntax
let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/// install babel:
// npm install babel-cli

/// install required packages:
// npm install babel-preset-env

/// transpile your code from ES6 to ES5:
// npm run build
// above only works if build is set in the scripts obj of the package.json as "babel src -d lib"


// to be fair tho, this file does absolutely nothing.
// it was used as an introduction to transpiling with babel,
// but it's not capable of doing that as it is here ofc.