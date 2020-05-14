// my function to delete doubles
const getDistinctArray = arr => [...new Set(arr)];

// my solve
function uniteUnique(...input) {
  // flatten inputs to a single array with reduce
  let result = input.reduce((a, b) => (a.push(...b), a), []);
  return getDistinctArray(result);
};



// iterative solve from docs
function uniteUniqueIt(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}


// Simpler version than mine with concat from the docs
function uniteUniqueConcat(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);
  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// tests here

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);