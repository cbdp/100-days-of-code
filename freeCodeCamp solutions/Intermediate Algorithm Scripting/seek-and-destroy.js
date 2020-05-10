// first solve:
function destroyer(arr, ...param) {
  let parameters = param.map(x => x);
  let intersection = arr.filter(y => !parameters.includes(y));
  return intersection;
};

// and a pretty one liner:
const destroyerOneLiner = (arr, ...param) => arr.filter(y => !param.map(x => x).includes(y));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* forgot that I could negate a condition with ! */