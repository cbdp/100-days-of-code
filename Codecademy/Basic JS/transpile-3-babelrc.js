/* Now that you’ve downloaded the Babel packages, you need 
to specify the version of the source JavaScript code. You can 
specify the initial JavaScript version inside of a file named 
.babelrc. In your root directory, you can run touch .babelrc 
to create this file. 

then add to follow obj to .babelrc:
          {
            "presets": ["env"]
          }
*/

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;