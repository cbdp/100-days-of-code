let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//////////////////////////////////////////

let storyWords = story.split(' ');
console.log('Wordcount is: ' + storyWords.length + 1);

const diffArray = (arr1, arr2) =>
  arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));

let betterWords = diffArray(storyWords, unnecessaryWords);
let paragraphs = (betterWords.join(' ').match(/[.!]/gm) || []).length;
console.log('Num of paragraphs is: ' + paragraphs);

// this function searches arr1 elements for all arr2 elements,
// I then push to a newArray and use .reduce to produce an
// object of each arr2 element and it's frequency in arr1
function wordCounter(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; arr1.length > i; i++) {
    for (let j = 0; arr2.length > j; j++) {
      if (arr1[i] == arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  return arr3.reduce((accum, val) => {
    accum[val] = (accum[val] || 0) + 1;
    return accum;
  }, {});
};

console.log(wordCounter(storyWords, overusedWords));
console.log(betterWords.join(' '));