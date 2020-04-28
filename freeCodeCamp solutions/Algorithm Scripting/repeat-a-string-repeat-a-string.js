// first pass while loop
function repeatStringNumTimes(str, num) {
  let repeater = '';
  while (num > 0) {
    repeater += str
    num--;
  };
  return repeater;
};

// with .repeat() method.
const repeatStringNumTimes = (str, num) => num > 0 ? str.repeat(num) : '';

repeatStringNumTimes("abc", 3);