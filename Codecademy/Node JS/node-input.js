let { testNumber } = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};


// Recieves an input
//process.stdin.on();
// Gives an output
//process.stdout.write();

// process.stdin.on('name of event', listenerCallbackFunction);
process.stdin.on('data', playGame);
