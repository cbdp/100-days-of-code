// for loop 
function factorializeForLoop(n) {
  for (var i = 1; n > 0; n--) {
    i *= n;
  };
  return i;
};

// recursion 
function factorializeRecursion(n) {
  if (n === 0) {
    return 1;
  };
  return n * factorializeRecursion(n - 1);
};

// one-liner
const factorialize = n => !(n > 1) ? 1 : factorialize(n - 1) * n;

factorialize(5);