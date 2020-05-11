// regEx vars
let vowRegEx = /[aeiou]/gi;
let conRegEx = /[bcdfghjklmnpqrstvwxys]/gi;

// function to transform single word string into pig latin
function translatePigLatin(str) {
  let newArray = str.split('');
  let pigLatin = [];
  // if the word starts with a consonant
  if (newArray[0].match(conRegEx)) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].match(vowRegEx)) {
        break;
      } else {
        pigLatin.push(newArray[i]);
      };
    };
    newArray.splice(0, pigLatin.length);
    newArray = newArray.join('');
    pigLatin.unshift(newArray)
    pigLatin.push('ay');
    return pigLatin.join('');
  // if the word starts with a vowel
  } else if (newArray[0].match(vowRegEx)) {
     newArray.push('way');
     return newArray.join('');
  } else {
    console.log('error');
  }
};

translatePigLatin("glove");
translatePigLatin("algorithm");

/* My solve was obviously a drag to write, so after 
I finished it, I went back to the docs. Here's an
Easier way to do what I did: */
function translatePigLatinDocsOne(str) {
  // Create variables to be used
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  return pigLatin;
}

// test here
translatePigLatin("consonant");

/* and here is the best solution I found, which simply uses .replace: */
function translatePigLatinDocsTwo(str) {
  return str
/* Use replace() on the string, using a regular expression to check 
if the first letter is a consonant and adding way at the end in 
this case. If the first letter is a consonant nothing will 
happen at this point. */
    .replace(/^[aeiou]\w*/, "$&way")
/* Use replace() again to check for consonants at the beginning 
of the word and to move it or them to the end of the 
word and add ay at the end. */
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");