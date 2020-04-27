function findLongestWordLength(str) {

  let splitIntoArray = str.split(' ');
  let longestWord = 0;
  
  for (let i = 0; splitIntoArray.length > i; i++) {
    if (splitIntoArray[i].length > longestWord) {
      longestWord = splitIntoArray[i].length;
    };
  };

  return longestWord;

};

findLongestWordLength("The quick brown fox jumped over the lazy dog");