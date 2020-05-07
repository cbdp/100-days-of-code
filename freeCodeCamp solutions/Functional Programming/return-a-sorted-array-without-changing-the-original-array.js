let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [...arr]; // cloning with spread operator
  return newArray.sort(); // returning the sorted array
  // Only change code above this line
};
nonMutatingSort(globalArray);

/* I prefer my solve to the one in the docs, which seems needlessly complicated?

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);

*/