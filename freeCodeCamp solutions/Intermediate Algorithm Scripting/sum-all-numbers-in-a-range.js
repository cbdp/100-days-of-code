/* We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them. The lowest number 
will not always come first. */

function sumAll(arr) {
  const firstNum = arr[0];
  const secondNum = arr[1];
  let newArray = [];
  if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      newArray.push(i);
    };
  } else {
    for (let i = secondNum; i <= firstNum; i++) {
      newArray.push(i);
    };
  };
  return newArray.reduce((a, b) => a + b, 0);
};

sumAll([1, 4]);

/* solution proposed in the docs */

function sumAllDocs(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);