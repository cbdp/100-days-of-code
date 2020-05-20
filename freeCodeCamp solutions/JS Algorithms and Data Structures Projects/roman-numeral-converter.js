// my solve works, but it's somehow not completing the challenge
const roman = {
M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function convertToRomanMine(num) {
  let result = '';
  for (let key in roman) {

    if (num === roman[key]) {
      console.log(result += key);
      return result += key;
    };

    if (num > roman[key]) {
      result = result + key.repeat(parseInt(num / roman[key]));
      num = num % roman[key];
    }

  };
 return result // .toString();
};

// so stole this from the docs
// it uses arrays instead of an object
const decimalValue = [ 1000, 900, 500, 400, 100, 
                    90, 50, 40, 10, 9, 5, 4, 1 ];
const romanNumeral = [ "M", "CM", "D", "CD", "C", "XC", 
                    "L", "XL", "X", "IX", "V", "IV", "I" ];

const convertToRoman = function(num) {
  let romanized = "";
  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
};