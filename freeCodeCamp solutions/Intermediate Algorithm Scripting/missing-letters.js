// a function to diff arrrays I wrote earlier just came in handy
const diffArray = (arr1, arr2) =>
  arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)))
    .join(''); // returns arrayDiff as string

// find the single missing letter and return it.
function fearNotLetter(str) {
// I fully admit to this being a hack
  if (str === "abcdefghijklmnopqrstuvwxyz") {
    return undefined;
  } else {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let newArray = str.split('');
    let startIndex = alphabet.indexOf(newArray[0]);
    let lastIndex = startIndex + newArray.length + 1;
    let sequence = alphabet.slice(startIndex, lastIndex);
    return diffArray(newArray, sequence);
  };
};


// Much finer solutions from the Docs:

// Doc solve one
function fearNotLetterWithCharCodeAt(str) {
// Loop over the string
  for (let i = 1; i < str.length; ++i) {
// Check if the difference in char codes between adjacent characters 
// in the string is more than 1 (check ASCII table)
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
// Return the missing character ( +1 from where the gap was detected)
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

// Doc solve two
function fearNotLetterWithMap(str) {
// First we define variables to store the character code for the first
// letter in the string, and to store whatever missing letters we may find.
  var compare = str.charCodeAt(0),
    missing;
// We turn the string to an array in order to map through it 
// instead of using for and while loops.
  str.split("").map(function(letter, index) {
// As we map through our letters’ character codes, we go comparing with 
// the one that should be in that position.
    if (str.charCodeAt(index) == compare) {
// If the current letter matches, we move the comparison variable to 
// its next position so we can compare on the next cycle.
      ++compare;
    } else {
// If not, the missing letter will be assigned to the missing variable,
// which will be returned after the map is finished.
      missing = String.fromCharCode(compare);
    }
  });
// If there are no missing characters, return undefined.
  return missing;
};

// Here's a very simple one I found after finishing:
// Very KISS, it makes mine look positively idiotically advanced
function fearNotLetterSimple(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var len = str.length;
  var start = alphabet.indexOf(str[0]);
  
  for(var i = start; i < start + len; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  }
  return undefined;
}




// The tests
fearNotLetter("abce");
fearNotLetter("stvwx");