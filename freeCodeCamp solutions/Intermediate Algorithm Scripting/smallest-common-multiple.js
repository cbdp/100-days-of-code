// Euclidean algorithm for the greatest common divisor.
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
// Least Common Multiple for two numbers based on GCD
const lcm = (a, b) => (a * b) / gcd(a, b);

// function to get the range (unused)
function getRange(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let newArray = [];
  for (var i = min; i <= max; i++) {
    newArray.push(i);
  };
  return newArray
};

// solve with help from docs as I'm not in a mathy mood at all today
function smallestCommons(arr) {
  // sorting and getting the min and max num in the correct order
  let [min, max] = arr.sort((a, b) => a - b);
  // Init smallestCommon with the LCM of first two numbers.
  let theLCM = min;
  // Loop through range computing LCM of current LCM and next 
  // number in range lcm(a, b, c) = lcm(lcm(a, b), c).
  while (min < max) {
    theLCM = lcm(theLCM, ++min);
  };
  return theLCM;
};



// simpler docs solve
const smallestCommonsSimple = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

smallestCommons([1,5]);