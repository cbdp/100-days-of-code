// Sieve of Eratosthenes
const sieve = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
};

// My solve
const sumPrimes = num => {
  let sum = 0
  for (let i = 0; i <= num; i++)
    if (sieve(i) == true) sum = sum + i;
  return sum;
};

/* Reading about the Sieve, I learned more about ES6 syntax, so
I tried to apply it to my original solution, which is the one below */
function sumPrimesOrg(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i) == true) {
      sum = sum + i;
    };
  };
   return sum;
};


// Solves from the docs #1
// Create a function to check if a number is prime or not.
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}

function sumPrimes(num) {
    // Declare two variables. One to keep us within the limit of the given 
    // number and the other to store the sum of numbers to be returned.
  let i = 1;
  let sum = 0;
    // Create a loop to check all numbers lesser than or equal to the given number.
  while (i <= num) {
      // Check if a number is prime and add it to the value of sum.
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
    // Return the value of sum once the loop exits.
  return sum;
}


// Solves from the docs #2
function sumPrimes(num) {
    // Use Array.from() to generate a sequence of numbers up to and including num.
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
  // Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
    .slice(2);
    // If a number is not prime, it is divided by number > 1 other smaller than himself.
  for (let n in nums) {
    nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}
