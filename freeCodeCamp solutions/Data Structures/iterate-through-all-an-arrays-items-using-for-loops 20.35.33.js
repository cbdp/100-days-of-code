function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) > 0) {
    // newArr.push('delete');
    } else if (arr[i].indexOf(elem) >= 0) {
    // newArr.push('kill');
    } else {
      newArr.push(arr[i]);
    }
  };
  // Only change code above this line
  console.log(newArr);
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/* I made this harder than it was, here's the "official" solution: 

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) { 
    //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

*/