// my solve
const bouncer = (arr) => arr.filter(Boolean); 

// solve without .filter method
function bouncey(arr) {
  let arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

bouncer([7, "ate", "", false, 9]);