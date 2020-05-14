// my very simple solve, after spending too long with .Math
function sumFibs(n) {
  let first  = 0;
  let second = 1;
  let accum  = 0;
  let sumOdd = 0;
  for (let i = 0; i <= n; i++) {
    accum = first + second;
    first = second;
    second = accum;
    if (accum % 2 !== 0 && accum <= n) {
      sumOdd = accum + sumOdd;
    };
  };
  return sumOdd + 1;
};


// countdown solve from the docs with a while loop
function sumFibsWhile(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}