// Basically while the second argument is not true, you will have to 
// remove the first element from the left of the array that was passed 
// as the first argument.

function dropElements(arr, func) {
  // somethings not working below with arr. length, so:
  let crappyCode = arr.length;
  // iterate over array
  for (let i = 0; i < crappyCode + 1; i++) {
    // if func(arr[0]) returns true
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
};

dropElements([1, 2, 3], function(n) {return n < 3; });

// prettier solve from docs
function dropElementsWhileAndShift(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// recursive solve from docs
function dropElementsRecursion(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}