// my solve
function truthCheck(collection, pre) {
  let newArray = [];
  collection.forEach(function(i) {
      newArray.push(i.hasOwnProperty(pre) && Boolean(i[pre]));
  });
  return newArray.every(Boolean);
};

// similar but better solve from the docs without .forEach
function truthCheckEveryFirst(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
};

// best solve with .every from the docs, imo
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
};

truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
  ], 
  "sex");

truthCheck([
  {"user": "Tinky-Winky", "sex": "male", "age": 0},
  {"user": "Dipsy", "sex": "male", "age": 3}, 
  {"user": "Laa-Laa", "sex": "female", "age": 5}, 
  {"user": "Po", "sex": "female", "age": 4}
  ], "age");