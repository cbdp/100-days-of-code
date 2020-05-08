/* The every method works with arrays to check if every element passes a 
particular test. It returns a Boolean value - true if all values meet the 
criteria, false if not. */

// First solve
function checkPositiveOriginalSolve(arr) {
  return arr.every(function(currentValue) {
    return currentValue > 0;
  });
};

// One liner solve
const checkPositive = arr => arr.every(value => value > 0);

// testing
checkPositive([1, 2, 3, -4, 5]);