// Create function with two parameters
function whatIsInAName(collection, source) {
  // Object.keys(x) returns the keys for source param
  let searchWords = Object.keys(source); // i.e. ['last']
  // Return a filter of collection, wherein the filtered items
  // are defined as as a function of searchWords. Or more precisely:
  /* We map through all keys and return Boolean values based on the 
  check conditions: Both the key and its corresponding value must 
  exist within the object we are filtering through. */
  return collection.filter(function(objectToBeSearched) {
    // return var searchTerms
    return searchWords
    // run map as a function of new var searchTerms
      .map(function(searchTerm) {
        // check if the collection filter hasOwnProperty(keys)
        return objectToBeSearched.hasOwnProperty(searchTerm)
        // and check if it matches values also
        && objectToBeSearched[searchTerm] === source[searchTerm];
      // returns true if found, false if not
      })
      // reduce the mapped Boolean values to a single Boolean
      // that indicates whether all searchWords pass the  
      // conditions checked above.
      .reduce((a, b) => a && b);
  });
};

// cleaner refactor
function whatIsInANameClean(collection, source) {
  let searchWords = Object.keys(source);
  return collection.filter(collectionObject => searchWords
    .map(searchTerms => collectionObject
      .hasOwnProperty(searchTerms) 
      && collectionObject[searchTerms] === source[searchTerms])
    .reduce((a, b) => a && b));
};

// another solve from the docs with .every()
function whatIsInANameEvery(collection, source) {
  var srcKeys = Object.keys(source);
  // We filter through the collection using .filter().
  return collection.filter(function(obj) {
    // Next, we return a Boolean value for the .filter() method.
    return srcKeys.every(function(key) {
     // Finally, we reduce to Boolean value to be returned 
     // for the .every() method.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
};

// the tests
whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" } );

whatIsInANameClean([
  { "apple": 1, "bat": 2 }, 
  { "apple": 1 }, 
  { "apple": 1, "bat": 2, "cookie": 2 }, 
  { "bat":2 }
  ], 
  { "apple": 1, "bat": 2 } );

whatIsInANameEvery([
  {"a": 1, "b": 2, "c": 3}
  ], 
  {"a": 1, "b": 9999, "c": 3} );