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
function findShort(s) {
  let array = (s.split(' '));
  let sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray[0].length;
};
```
**Notes**: with hydrate(str) I had problems figuring out regular expressions, but a bit of googling and reading got me through it, until I realised I was returning numbers as strings in my array, so I went to MDN and looked for a way to reverse the process. The result was parseInt() and, since I needed to turn everything back to a string for the puzzle to complete, I also grabbed .toString. Another interesting method was .match, which worked like a charm. 

With findShort(s), I felt much more confident and completed it rather quicker than expected. I will continue to do a few puzzles, but am also actively considering what could be a good project. Codewars is great, but many of the puzzles are math based, which can be a drag.