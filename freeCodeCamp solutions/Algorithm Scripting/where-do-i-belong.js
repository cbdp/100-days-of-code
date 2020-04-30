function getIndexToIns(arr, num) {
  let howManyLoops = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      howManyLoops++;
    };
  };
  return howManyLoops;
};


getIndexToIns([40, 60], 50);

/* 
spent too long on this, should have use filter like:
const getIndexToIns = (arr, num) => arr.filter(val => num > val).length;
*/