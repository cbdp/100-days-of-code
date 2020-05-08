/* The some method works with arrays to check if ANY element passes a 
particular test. It returns a Boolean value - true if any of the values 
meet the criteria, false if not. */

// Note: .every is EVERY element, .some is ANY

// First solve
function checkPositiveOriginalSolve(arr) {
  return arr.some(function(currentValue) {
    return currentValue > 0;
  });
};

// One liner solve
const checkPositive = arr => arr.some(value => value > 0);

checkPositive([1, 2, 3, -4, 5]);