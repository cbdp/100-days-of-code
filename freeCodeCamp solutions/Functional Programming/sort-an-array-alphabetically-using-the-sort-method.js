function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/* the above solve passed, but this is the suggested one from the docs:

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
};

*/