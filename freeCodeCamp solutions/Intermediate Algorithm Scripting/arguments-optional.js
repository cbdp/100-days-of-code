function addTogether() {
// create an array 'input' with Array.from(arguments)
  let input = Array.from(arguments); // didn't know this trick
  // First iterate through the arguments with .some and check for 
  // arguments that are not a number and return undefined
  return input.some(x => typeof x !== "number")
    ? undefined
    // If it’s not, then check if the arguments length is above 1, 
    : input.length > 1
    // if it is, then sum the arguments using .reduce()
    ? input.reduce((a, b) => (a += b), 0)
    // Else return a function that checks if the passed in argument 
    // is a number and sum it, if not return undefined
    : y => (typeof y === "number" ? y + input[0] : undefined);
};

addTogether(2,3);
addTogether(2, "3");