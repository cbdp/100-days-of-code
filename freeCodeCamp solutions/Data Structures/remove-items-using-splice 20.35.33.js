const arr = [2, 4, 5, 1, 7, 5, 2, 1];
const arx = [2,'S',0, 0,'S',5, 2, 1];
const arg = [0, 1, 2, 3, 4, 5, 6, 7];
// Only change code below this line
arr.splice(1, 4);
arg.splice(1, 4, "removed");
// Only change code above this line
console.log(arr.reduce((a, b) => a + b));
console.log(arr);
console.log(arg);
console.log(arx);