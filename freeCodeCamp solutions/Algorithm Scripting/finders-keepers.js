/* .find() method: 
The find method executes the callback function once for each index of the 
array until the callback returns a truthy value. If so, find immediately 
returns the value of that element. Otherwise, find returns undefined. */

// without .find()
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    };
  };
  return undefined;
};

// with .find()
const findElement = (arr, func) => arr.find(func);


findElement([1, 2, 3, 4], num => num % 2 === 0);