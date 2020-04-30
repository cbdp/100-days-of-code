function frankenSplice(arr1, arr2, n) {
  // .slice() simply slices array in two
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
};

frankenSplice([1, 2, 3], [4, 5, 6], 1);
