/* indexOf() allows us to quickly and easily check for the presence of an 
element on an array. indexOf() takes an element as a parameter, and when 
called, it returns the position, or index, of that element, or -1 if the 
element does not exist on the array.
*/

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true;
  };
  // Only change code above this line
};

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
