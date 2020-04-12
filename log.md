# 100 Days Of Code - Log

### Day 1: April 7, 2020
#### 2 hours
##### IDE Setup

**Today's Progress**: Working on a new laptop, so spent time setting up my IDE. Battled npm, picked Adobe Brackets and tried to help out others on github.

**Notes**: First things first, working on translating a PWA (gatsbyJS) to two different languages, then setting them all up to run independent of each other. When that's done I'll get back to my main goal of diving deeper into js, probably using codewars and a personal project.

### Day 2: April 8, 2020
#### 2 hours
##### PWA translation

**Today's Progress**: Finished implementing translations of my PWA, waiting on new SSL servers before deployment

**Notes**: Glad to be finished with the workish part of the challenge and looking forward to starting tomorrow with some more straight up learning. I considered rebuilding my entire gatsbyJS project to add multilanguage support, but since it was requested after the PWA originally went live, I decided against it. In future 100 days of code learning, it might be fun to check up on multilangual support with gatsbyJS. I suspect I'll spend most of tomorrow getting back into the grove of just doing vanilla JS puzzles.

### Day 3: April 9, 2020
#### 1 hour
##### JS: Regular Expressions

**Today's Progress**: Trying to get back into the swing of things with some js puzzles.

**Notes**: Ran aground when a puzzle required I know regular expressions, which I don't, so spent most of the coding time today learning more. Might be back for more later tonight, otherwise I'll see you tomorrow.

### Day 4: April 10, 2020
#### 1 hour
##### JS: Regular Expressions, .sort, parseInt() and .toString

**Today's Progress**: Still trying to get back into the swing of things with some js puzzles.

**Code**:
```
/* Puzzle: assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water"); */

function hydrate(str) {
  let regEx = str.match(/\d/g);
  let array = [];

for (let i = 0; i < regEx.length; i++) {
    array.push(parseInt(regEx[i]));
  };
  
  let sumOfArray = array.reduce(function(a, b) {
    return a + b;
  });
  
  if (sumOfArray > 1) {
    let result = sumOfArray.toString() + ' glasses of water';
    return result;
  } else {
    let result = sumOfArray.toString() + ' glass of water';
    return result;
  };
};
````
and 
```
/* Puzzle: Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3); */

function findShort(s) {
  let array = (s.split(' '));
  let sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray[0].length;
};
```
**Notes**: with hydrate(str) I had problems figuring out regular expressions, but a bit of googling and reading got me through it, until I realised I was returning numbers as strings in my array, so I went to MDN and looked for a way to reverse the process. The result was parseInt() and, since I needed to turn everything back to a string for the puzzle to complete, I also grabbed .toString. Another interesting method was .match, which worked like a charm. 

With findShort(s), I felt much more confident and completed it rather quicker than expected. I will continue to do a few puzzles, but am also actively considering what could be a good project. Codewars is great, but many of the puzzles are math based, which can be a drag.

### Day 5: April 11, 2020
#### 2 hours
##### JS: Regular Expressions, .replace, .trim, .reverse, .join, .split

**Today's Progress**: Still trying to get back into the swing of things with some js puzzles.

**Code**:
```
/* Puzzle: Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space"); */

function songDecoder(song) {
  const patternDub = /WUB/g;
  const patternSpace = /\s+/g;

return song.replace(patternDub, ' ').replace(patternSpace, ' ').trim();
};
```
and
```
/* Puzzle: Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words reversed */

function spinWords(s){
  let array = (s.split(' '));
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      let backwards = array[i].split('').reverse().join('');    
      array[i] = backwards;
    };
  };
  
  return array.join(' ');
};
```
**Notes**: Started adding short descriptions of the puzzles on top. I'd like to be able to better refactor my solutions, which are also seemingly depending a lot on learning new methods. Maybe I should do a Freecodecamp.org course instead? From another js course I completed last year, I remember thinking it was nice, gave some basic knowledge etc., but when it came down to it, the course simply didn't help me with quite a lot of real world problems. Hmm.

### Day 6: April 11, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 40/110

**Notes**: Decided to go for a certification, so far the basic Javascript is a bit of a slog to do, but I guess it can't hurt to redo the basics. It's easter lunch here, so could only do the one hour.

**PS**: Spent another thirty minutes with git.