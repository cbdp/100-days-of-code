// with Math.max and the spread operator
function largestOfFour(arr) {

  let largestOfFourArray = [];

  for (let i = 0; i < arr.length; i++) {
      largestOfFourArray.push(Math.max(...arr[i]));
  }

  return largestOfFourArray;

};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
