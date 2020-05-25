// helper function
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// my bruteforcey solve
function telephoneCheck(str) {
  const weirdRegEx = /[?!#*&]/gm;
  let newArray = str.split('')
  // filter out any weirdness
  if (str.search(weirdRegEx) === -1)
  // filter out those pesky negatives and weird (x)'s
  if (newArray[0] !== '-' && newArray[newArray.length - 1] !== ')')
  // filter out all numbers with missing ( or )'s
  if (newArray.indexOf('(') >= 0 && newArray.indexOf(')') >= 0 
  // but not the ones with no ()'s at all
  || newArray.indexOf('(') == -1 && newArray.indexOf(')') == -1) {
    // map to parseInt, then filter out all numbers with helper func
    newArray = newArray.map(x => parseInt(x)).filter(n => isNumber(n));
    // set length for readability, which tbh is too little, too late
    let length = newArray.length
    // check length is 10, if is 11, ensure country code 1
    if (length === 10 || length === 11 && newArray[0] === 1) {
        // numbers passing all these checks return true
        return true; 
      }}
  // all others return false
  return false;
};


// and here's what I should have done from the docs #1

/* REGEX EXPLAINED
^ denotes the beginning of the string.
(1\s?)? allows for “1” or "1 " if there is one.
\d{n} checks for exactly n number of digits so \d{3} checks for three digits.
x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits 
surrounded by parentheses, or three digits by themselves with no parentheses.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning ^ and end of the 
string $ are used in the regex to prevent it from matching any longer string that 
might contain a valid phone number (eg. “s 555 555 5555 3”). */
const regexDocs = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

function telephoneCheckOne(str) {
  // Lastly we use regex.test(str) to test if the string adheres to the regular expression, 
  // it returns true or false.
  return regexDocs.test(str);
};


// and/or the more robust #2 solve, which steals this magical regex from somewhere:
function telephoneCheckTwo(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
};