/* Flatten a nested array.
You must account for varying levels of nesting.
Your solution should not use the Array.prototype.flat() 
or Array.prototype.flatMap() methods. */

// my solve with mdn help
// to enable deep level flatten use recursion with reduce and concat
function steamrollArray(arr, depth = 10) {
   return depth > 0 ? 
    arr.reduce((accum, value) => 
      accum.concat(Array.isArray(value) ? 
        steamrollArray(value, depth - 1) : value), []) : arr.slice();
};

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);


// the guidelines helped me, as MDN provides alternatives to .flat
// which incidentally works like this:
const arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// And this is where I read about this way to solve it:

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? 
                flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]

// also including alternatives from the docs again, as these have 
//proven to be quite helpful in the learning process:

function steamrollArrayForEach(val, flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
};

function steamrollArrayConcatAndSome(arr) {
// Use spread operator to concatenate each element of arr with an empty array
  let flat = [].concat(...arr);
// Use Array.some() method to find out if the new array contains an array still
  return flat.some(Array.isArray) ? 
// If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
      steamrollArray(flat) 
// If it does not, return the flattened array
      : flat;
};

function steamrollArrayIterative(arr) {
  var flattenedArray = [];
  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
};