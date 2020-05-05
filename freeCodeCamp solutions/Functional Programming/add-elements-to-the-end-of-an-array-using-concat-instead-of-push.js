/* Functional programming is all about creating and using 
non-mutating functions.

The last challenge introduced the concat method as a way to combine 
arrays into a new one without mutating the original arrays. 
Compare concat to the p u s h method. P u s h adds an item to the 
end of the same array it is called on, which mutates that array. 

Concat offers a way to add new items to the end of an array 
without any mutating side effects. */

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
