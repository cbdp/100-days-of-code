function chunkArrayInGroups(arr, size) {
  
  let newArray = [];
  let lengthy = arr.length;

  for (let i = 0; i < lengthy; i += size) {
    newArray.push(arr.splice(0, size));
  };

  return newArray;
};

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* 
this .splice solution from the docs makes more sense to be fair: 

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  while (arr.length) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}

Also, I wanted to use .slice rather than splice, but kept getting it wrong. Here's how it's done right:

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

The trick I missed was arr.slice(i, i + size)

*/