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

### Day 6: April 12, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 40/110

**Notes**: Decided to go for a certification, so far the basic Javascript is a bit of a slog to do, but I guess it can't hurt to redo the basics. It's easter lunch here, so could only do the one hour.

**PS**: Spent another thirty minutes with git.


### Day 7: April 13, 2020
#### 2 hours
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 79/110

**Notes**: When I said the Basic JS was a bit of a slog, here's an example of how mindnumbing it gets

**Code**:
```
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
      return names[0];
  } else if (strokes <= par - 2) {
      return names[1];
  } else if (strokes == par - 1) {
      return names[2];
  } else if (strokes == par) {
      return names[3];
  } else if (strokes == par + 1) {
      return names[4];
  } else if (strokes == par + 2) {
      return names[5];
  } else if (strokes >= par + 3) {
      return names[6];
  };
  return "Change Me";
  // Only change code above this line
};

golfScore(5, 4);
```
and 
```
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
  };

  // Only change code above this line
  return answer;
};

sequentialSizes(1);
```
and of course it got a little more exciting the minute I complained on here with a card counter
```
var count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count = count + 0;
  } else if (card === 10) {
    count--;
  } else if (card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  } else {
    return "Change Me";
  };

  if (count >= 1) {
    return count + " Bet"
  } else {
    return count + " Hold"
  };
  // Only change code above this line
};

cc(2); cc(3); cc(7); cc('K'); cc('A');
````
**Notes continued**: Last one was kinda fun tho. Hope there are more like that in the future, much more puzzle like and a lot less rote. 


### Day 8: April 14, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp + adding html lang attribute to differentiate 3 gatsby sites

**Today's Progress**: Basic Javascript 88/110

**Notes**: Still on the Basic JS Section. Suddenly realised I needed to declare html lang to help differentiate between the 3 gatsby sites I'm working on, so I'll be looking into how to best implement this. Also started adding some of my freecodecamp solutions here to help fuel my sense of progress.


### Day 9: April 15, 2020
#### 1.5 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 92/110

**Notes**: Spent waay too long on a JSON record updating question thing. Added it to the fcc solutions folder.

### Day 10: April 16, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 100/110

**Notes**: GD recursion...


### Day 11: April 17, 2020
#### 1.5 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 100/110

**Notes**: Got my head around searching an array without the benefits of multiple methods. Added this and some older fcc exercises in the fcc folder. Also spent a while with zshrc and homebrew.


### Day 12: April 18, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 108/110

**Notes**: Did a few exercises, helped a friend and played around with zsh. FCC let's me download my code, but always sends the file as a .txt. This annoyed me, because I'd have to change the extension on every file I got from there. So I used homebrew to install rename and then added this alias:
```
alias tojs="rename 's/.txt/.js/' *.txt"
```
to my .zshrc config, so now I can just dump the files into my fcc folder and bulk rename the extensions with 'tojs'. Much easier. Dreading tomorrow tho, 'cause recursive functions are bach on the menu for the final 2 lessons of Basic Javascript on FCC.

**PS**: Actually, the first one (use-recursion-to-create-a-countdown.js) was so easy I finished it in a few minutes. Next one will probably be harder. See you tomorrow.


### Day 13: April 19, 2020
#### 2 hours
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 110/110, ES6 13/31

**Notes**: Yup, the second recursion question was harder, at least now I kind a feel like I get it... Tho this'll probably only last until the next time I have to do it. Happy to done with the Basic Javascript lessons, glad to be on the ES6 ones.

**Code**: Spent a little extra time on arrow functions to drill them into my head. I was refactoring my solution to a puzzle I did on day 5. This is the one:
```
/* Puzzle: Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space"); */

function songDecoder(song) {
  const patternDub = /WUB/g;
  const patternSpace = /\s+/g;

return song.replace(patternDub, ' ').replace(patternSpace, ' ').trim();
};
```
changed that to:
```
const patternDub = /WUB/g;
const patternSpace = /\s+/g;
const songDecoder = (song) => song.replace(patternDub, ' ').replace(patternSpace, ' ').trim();
```
then I discovered the patterns could (and probably should) be embedded:
```
function songDecoder(song){
  return song.replace(/(WUB)+/g, ' ').trim();
}
```
Then I realised I'd forgot the arrow functions, so the final refaction was this:
```
const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();
```
much more concise, yay!


### Day 14: April 20, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Javascript 110/110, ES6 17/31

**Notes**: Was slightly scatterbrained today, but still managed to put in an hour on destructuring. Most daily solutions added to folder.


### Day 15: April 21, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: ES6 22/31 plus wrestling with an npm problem.

**Notes**: A little burnt out on exercises again today, but got the hour in. I might finish up ES6 and try to do a project or something, so it's not just learning something new everyday, but practicing what I've learned a little bit as well. NPM ate more than half my time today with some messed up permissions, works now tho.


### Day 16: April 22, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: ES6 31/31, Regular Expressions 13/33.

**Notes**: Finished the ES6 lessons, started on Regular Expressions. Discovered https://javascript30.com/ and signed up. Haven't started it yet tho. Also reorganised my freecodecamp folder.


### Day 17: April 23, 2020
#### 2 hours
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Regular Expressions 33/33, Debugging 0/12

**Notes**: Finished the Regular Expressions portion, but not exactly with flying colours. Made it through though. Also watched the first lesson from https://javascript30.com/, it's a very different type of Vanilla JS than the one I'm doing on FCC, but interesting nonetheless.


## MISSED A DAY DUE TO BIRTHDAY ATTENDENCE


### Day 18: April 25, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Debugging 12/12, Basic Data Structures 4/20

**Notes**: Finished the debugging lessons, started Basic Data Structures. Forgot to push to git.


### Day 19: April 26, 2020
#### 1.5 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Data Structures 12/20

**Notes**: Mostly arrays and methods for mutation or extracting data from them with .splice, .slice and .indexOf methods. Files added and pushed to fcc folder.


### Day 20: April 27, 2020
#### 2 hours
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Data Structures 20/20, Basic Algorithm Scripting 5/16

**Notes**: Finished the Basic Data Structures lessons. Was mildly disappointed it didn't cover .map, which seems to have been relegated to the 'Thousands of hours of interview code prep' section, which isn't really part of the JS course at all. Anyway: Up next is Basic Algorithm Scripting, which is basically small code projects wherein you apply all that you've learned so far. Interesting, but I'm unsure of a few things, so I'm glad I saved some of my earlier solutions.


### Day 21: April 28, 2020
#### 4 hours
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Algorithm Scripting 12/16

**Notes**: Enjoying these small puzzles... Which both makes sense and doesn't, because I started the course in order to quit doing puzzles, but I do seem to finish the puzzles a lot more quickly now, even tho I'm still googling for methods. Added multiple solutions to fcc files and an example below.

**Code**:
```
function titleCase(str) {

  let array = str.toLowerCase().split(' ');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i][0].toUpperCase() + array[i].slice(1, array[i].length));
  };
  
  return result.join(' ');
};
titleCase("I'm a little tea pot");
```
Above is my solution, but I'm loving this one listed in the docs using regex:
```
const titleCase = (str) => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
titleCase("I'm a little tea pot");
```
**PS**: I also enrolled at codeacademy and took a few quizzes. Can't decide if I should stick with freecodecamp, do both or just switch. Will probably stick for freecodecamp for the time being to finish the js cert, then perhaps onto codeacademy for react and express.js. Even tho that probably means reviweing some of the basic js stuff as the two courses are vastly different.


### Day 22: April 29, 2020
#### 1 hour
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Algorithm Scripting 14/16

**Notes**: Not feeling it today, but pressed on. Kept making dumb mistakes. Will add code and this text to git tomorrow.


### Day 23: April 30, 2020
#### 100 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Algorithm Scripting 15/16 and short signup summary.

**Notes**: I've signed up to the following services and realised I needed to plan a little ahead. The order:

[x] https://www.freecodecamp.org - Since this is absolutely free, it's a great resource. I'm going to stick with getting my certification here first.

[] https://www.codecademy.com - I've got three months worth of pro here, that's on a timer, so likely I'll go here after I finished my js cert on fcc. Note, both the JS basics course and the two React courses here is free.

[] https://javascript30.com - Also free and unlimited.

I enjoyed the one video I watched on javascript30, but I need a course covering the DOM. Hopefully, this is included at codecademy and I can get to it after I finish my cert. (I checked this a day or two later and yes, there's a few lessons on this at codecademy).

Furthermore, I spent way too long on a single algorithm scripting question, because I tried to solve it without the .indexOf() method. Also, I've decided to list time spent coding in minutes instead from now on, as it's easier with the current timer I'm using.


### Day 24: May 1, 2020
#### 77 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Basic Algorithm Scripting 16/16, Object Oriented Programming 3/26

**Notes**: Finished off Basic Algorithm Scripting today. Was difficult, but felt good. I worry about the upcoming Intermediate Algorithm Scripting module, but hopefully I'll be armed with a few more methods for that one. In general, I'm sick of looping through arrays. Adding today's hardest below with alternative solutions and where I messed up.

**Code**:
My solve:
```
function chunkArrayInGroups(arr, size) {
  
  let newArray = [];
  let lengthy = arr.length;

  for (let i = 0; i < lengthy; i += size) {
    newArray.push(arr.splice(0, size));
  };

  return newArray;
};

chunkArrayInGroups(["a", "b", "c", "d"], 2);
``` 
this .splice solution from the docs makes more sense to be fair: 
```
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  while (arr.length) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}
```
Also, I wanted to use .slice rather than splice, but kept getting it wrong. Here's how it's done right:
```
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
```
The trick I missed was arr.slice(i, i + size).


### Day 25: May 2, 2020
#### 95 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Object Oriented Programming 22/26

**Notes**: Enjoying learning more about objects rather than arrays. Tho I'm sure this'll come back to bite me in the rear once the exercises start.


### Day 26: May 3, 2020
#### 90 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Object Oriented Programming 26/26, Functional Programming 5/24

**Notes**: Finished Object Oriented Programming lessons, started Functional Programming lessons. 

### Day 27: May 4, 2020
#### 70 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Functional Programming 8/24

**Notes**: Functional Programming lessons are... well, not ideal tbh. Having written a million for loops on fcc, they only gave me one example to learn .map, which was something I was otherwise looking forward to. Spent a lot of time today trying to clear things up with various googled tutorials.


### Day 28: May 5, 2020
#### 65 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Functional Programming 15/24

**Notes**: No notes today, in a rush.

### Day 29: May 6, 2020
#### 100 minutes
##### Supplemented FreeCodeCamp with video tutorials

**Today's Progress**: Paused the JavaScript Algorithms and Data Structures Certification from FreeCodeCamp and watched various tutorials on higher order functions.

**Notes**: Notes are in the code today.

**Code**: 
##### Dataset for testing:
```
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
```

##### .forEach()
.forEach() syntax
```
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```
Log each company name with a for loop
```
for(let i = 0; i < companies.length; i++) {
   console.log(companies[i]);
 }
```
forEach: Do the same, but with forEach
```
 companies.forEach(function(company) {
   console.log(company.name);
 });
```

##### .filter()
.filter() syntax
```
let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
```
Filter: Get 21 and older with a for loop
```
 let canDrink = [];
 for(let i = 0; i < ages.length; i++) {
   if(ages[i] >= 21) {
     canDrink.push(ages[i]);
   }
 }
```
Filter: Get 21 and older with filter
```
 const canDrink = ages.filter(function(age) {
   if(age >= 21) {
     return true;
   }
 });
```
Filter: Get 21 and older with filter and arrow functions
```
const canDrink = ages.filter(age => age >= 21);
```
Filter: get all retail companies with filter
```
 const retailCompanies = companies.filter(function(company) {
   if(company.category === 'Retail') {
     return true;
   }
 });
```
Filter: get all retail companies with filter and arrow functions
```
const retailCompanies = companies.filter(company => company.category === 'Retail');
```
Filter: Get all 80s companies
```
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
```
Filter: Get companies that lasted 10 years or more
```
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
```

##### .map()
.map() syntax
```
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```
Map: Create array of company names with map
```
 const companyNames = companies.map(function(company) {
   return company.name;
 });
```
Map: Create array of company names plus years active with map
```
 const testMap = companies.map(function(company) {
   return `${company.name} [${company.start} - ${company.end}]`;
 });
```
Map: Create array of company names plus years active with map and arrow functions
```
 const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
```
Map: Create array of ages squarerooted and timed with two
```
 const ageMap = ages
   .map(age => Math.sqrt(age))
   .map(age => age * 2);
```

##### .sort()
.sort() syntax
```
arr.sort([compareFunction])
```
Sort: Companies by start year with sort
```
 const sortedCompanies = companies.sort(function(c1, c2) {
   if(c1.start > c2.start) {
     return 1;
   } else {
     return -1;
   }
 });
```
Sort: Companies by start year with sort, arrow functions and a ternary operator
```
 const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
```
Sort: Sort ages ascending with sort (descending would be a + b)
```
 const sortAges = ages.sort((a, b) => a - b);
```

##### .reduce()
.reduce() syntax
```
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```
Sum all ages with a for loop
```
 let ageSum = 0;
 for(let i = 0; i < ages.length; i++) {
   ageSum += ages[i];
 }
```
Reduce: Sum all ages with reduce. The zero at the end is the initial value of total, converting results to numbers not objects
```
 const ageSum = ages.reduce(function(total, age) {
   return total + age;
 }, 0);
```
Reduce: Sum all ages with reduce and arrow functions.
```
 const ageSum = ages.reduce((total, age) => total + age, 0);
```
Reduce: Get total years for all companies with reduce
```
 const totalYears = companies.reduce(function(total, company) {
   return total + (company.end - company.start);
 }, 0);
```
Reduce: Get total years for all companies with reduce and arrow functions
```
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
```

##### Combining Methods
Simple example of how to combine map, filter, sort and reduce on an array
```
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

```

### Day 30: May 7, 2020
#### 110 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Functional Programming 21/24

**Notes**: Did the next couple of Functional Programming lessons and have added them to the fcc folder. Also, yesterday I forgot to add examples and an explaination of higher order functions, so I spent some time on that today and I'm adding it here in the second code segment of the log.

**Code 1**: Of all the things I wrote today, I'm most happy about this function, which takes a string and transforms it to an url-slug
```
const urlSlug = title => title.trim().toLowerCase().split(/\W+/g).join('-');
```
It's simply neat and easy to read, I think.

**Code 2**:
This is a normal function:
```
function world() {
    console.log('world');
};
```
A higher order function is any function that takes a function as input or sends a function out as output.
```
function hello(callback) {
    console.log('hello');
    if (callback instanceof Function) {
        callback();
        };
};
```
calling these two functions separately and together gives:
```
world(); // logs world
hello(); // logs hello
hello(world); // logs hello world
```
Here's an example of a function returning a function
```
function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}
```
same function as above, but with arrow functions
```
function multiplier(factor) {
    return x => x * factor;
}
```
We can use our higher order function, multiplier(), to create other functions, for example:
```
let doubler = multiplier(2); // creates a function that takes x and times with two
```
The above sets the factor of multiplier() to 2 and returns doubler(x) as a function, so that:
```
doubler(4); // returns 4 * 2 = 8
```
Maybe not the perfect explaination, but I thought it was important in conjunction with yesterdays focus on built-in array.prototypes .sort, .reduce, .map and .filter.

### Day 31: May 8, 2020
#### 105 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Functional Programming 24/24, Intermediate Algorithm Scripting 2/21.

**Notes**: Finished the Functional Programming lessons, started on Intermediate Algorithm Scripting. I'm finding the Intermediate Algorithm Scripting challenges difficult, but I suppose that's the point. The proposed solution from the docs for the first I did today was to use the .math method, but I found a way around that. Not sure if that's a good thing or not, I suppose it's fine if it's not just an array of numbers. The second one, diff two arrays and return an array with the differences, was a bit more difficult, so I'm including my code with comments here, so that I might read it again if another problem involves set theory.

**Code**:
```
// I'll admit it, I googled a bit after failing with an imperative approach.
// That led me down a set theory rabbit hole, but also to this solve:
const diffArray = (arr1, arr2) =>
  arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));

// The test
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// SET THEORY
// Tip: Use mental Venn Diagrams to help understand this problem

/* Two arrays, arrA and arrB, is used to explain set theory and how
it can be applied with js vanilla below */
let arrA = [1, 3, 4, 5];
let arrB = [1, 2, 5, 6, 7];

/* Intersection:
The intersection will give us the elements that both arrays share in 
common, in this case the result must be [1,5]. */
let intersection = arrA.filter(x => arrB.includes(x));

/* Difference:
The difference will output the elements from array A that are not in 
the array B. The result will be [3,4]. */
let difference = arrA.filter(x => !arrB.includes(x));

/* Symmetrical Difference:
In this case, you will get an array containing all the elements of 
arrA that are not in arrB and vice-versa, so the result should be 
[2,3,4,6,7]. */
let symmetricalDifference = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));

/* Union:
The union must be the simplest of them all, at the end, the result 
should be all the elements from A, all from B, or both like this 
[1,2,3,4,5,6,7]. */
let union = [...arrA, ...arrB];

/* But, there is a problem is that if we use spread operator, we will get 
elements duplicated, so it’s no theoretically an union. For doing this we 
have can use a Set to help us out: */
let unionTrue = [...new Set([...arrA, ...arrB])];


// Imperative solution proposed by the fcc docs
function diffArrayDocs(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      // incidentally, this is where I failed. Forgot the indexOf method.
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}
```

### Day 32: May 9, 2020
#### 75 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 3/21.

**Notes**: None really, these are tough, but at least it feels like I'm learning more. Blew past the first puzzle today, but the next one has me completely stumped. After looking at it for an hour, I finally gave up and started reading the solutions. Didn't feel great, so I hope that's not an omen of more things to come. It's incredibly annoying to be stuck at 4/21 after having finished to many lessons. Either something hasn't stuck or the course structure is somewhat lacking. I need to use .hasOwnProperty() and Object.keys(), both of which I simply can't remember for the life of me. Had this been array, I think I could have done it, but doing it as objects with three convoluted functions all feeding eachother seems beyond me right now. I'm not pushing this to git today, as I'm feeling utterly defeated.

PS. Went through the forums, thank christ I'm not the only one having problems with this. Seems loads of people find it difficult, as in it seems like the most difficult task in there. Added my spaghetti here and cleaned up the .js for the fcc folder, but wanted to show my work when it was terrible as well.

**Code**: 
The puzzle is this: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
```
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let searchWord = Object.keys(source);
  console.log(searchWords);
  /*
  console.log(collection[1].hasOwnProperty('last'));
  console.log(source.hasOwnProperty('last'));
  console.log(collection.filter(x => x.last == "Capulet"));
  console.log(Object.keys(collection));
  console.log(Object.values(collection));
  console.log(Object.entries(collection));
*/
  return collection.filter(function(objectToBeSearched) {
    return searchWord
      .map(function(searchTerm) {
        return objectToBeSearched.hasOwnProperty(searchTerm) 
        && objectToBeSearched[searchTerm] === source[searchTerm];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
  // Only change code above this line
};
// testing
whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" });

whatIsInAName([
  { "apple": 1 }, 
  { "apple": 1 }, 
  { "apple": 1, "bat": 2 }
  ], 
  { "apple": 1 });
  ```
  
### Day 33: May 10, 2020
#### 90 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 5/21.

**Notes**: Spent some time trying to discover what I quite couldn't work out in yesterdays code challenge. That's below

**Code**:
```
// Create function with two parameters
function whatIsInAName(collection, source) {
  // Object.keys(x) returns the keys for source param
  let searchWords = Object.keys(source); // i.e. ['last']
  // Return a filter of collection, wherein the filtered items
  // are defined as as a function of searchWords. Or more precisely:
  /* Map through all keys and return Boolean values based on the 
  check conditions: Both the key and its corresponding value must 
  exist within the object we are filtering through. */
  return collection.filter(function(objectToBeSearched) {
    // return var searchTerms
    return searchWords
    // run map as a function of new var searchTerms
      .map(function(searchTerm) {
        // check if the collection filter hasOwnProperty(keys)
        return objectToBeSearched.hasOwnProperty(searchTerm)
        // and check if it matches values also
        && objectToBeSearched[searchTerm] === source[searchTerm];
      // returns true if found, false if not
      })
      // reduce the mapped Boolean values to a single Boolean
      // that indicates whether all searchWords pass the  
      // conditions checked above.
      .reduce((a, b) => a && b);
  });
};

// Testing
whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" });
```
More solutions can be found in the fcc folder in the Intermediate Algorithm Scripting folder under the name wherefore-art-thou.js

I also did a bit of battle with regex, which resulted in this solve for the next problem:
```
const spinalCase = str => 
  str
    .replace(/([A-Z])/g, ' $1')
    .split(/\W|_/g)
    .filter(x => x)
    .join('-')
    .toLowerCase();

// testing
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
```
Afterwards I found this regex solution in the docs:
```
let regEx = /\s|_|(?=[A-Z])/;
```
It does not require .replace or .filter and as such is better, even tho I'm still happy with mine.

### Day 34: May 11, 2020
#### 60 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 6/21.

**Notes**: Not happy with my solve today. Spent an hour building a function, that takes in a one-word string and turns it into pig latin. I won't add it here, but I'll put it up the Intermediate Algo script folder for future study. It also includes a few ways I could (or should) have done it differently. Tomorrow I might take the best one of these and try to refactor it, so it'll take whole sentences for fun.

### Day 35: May 12, 2020
#### 60 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 8/21.

**Notes**: No real notes today. Went a lot better than yesteday, solved two in an hour, but I find myself still solving complex problems with for loops and if else statements, where something like .map would be better.

### Day 36: May 13, 2020
#### 65 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 9/21.

**Notes**: Just the one solve today, it's in the folder under missing-letters.js. Intermediate Algorithm Scripting is taking it's time, mostly because I'm failing to see what to use where. Sometimes I'm right, sometimes I'm very wrong, but I usually finish at least one a day, so so far so good.

### Day 37: May 14, 2020
#### 170 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 13/21.

**Notes**: Got a good js workout in today, so happy days. Js files are in the folder.

### Day 38: May 15, 2020
#### 60 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 15/21.

**Notes**: Dead tired and not feeling it today. Both the problems I solved more with Google than noodle. Remember to push to git tomorrow.

### Day 39: May 16, 2020
#### 104 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 18/21.

**Notes**: Watched videos for about 20 minutes on deno, which is like node.js, but secure. It also handles typescript, which is something I don't need right now. Was interesting to watch tho and helped me get in the mood for coding. Maybe that's how I should start on days when I'm feeling lethargic? Happy with my solutions for today. As always, everything is in the folder (including yesterday).

### Day 40: May 17, 2020
#### 110 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 20/21.

**Notes**: Nearly done now, there's a lot I still don't know, so I think I might do the JS course on https://www.codecademy.com next.


## MISSED A DAY DUE TO BIRTHDAY ATTENDENCE


### Day 41: May 19, 2020
#### 78 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: Intermediate Algorithm Scripting 21/21, JavaScript Algorithms and Data Structures Projects 1/5

**Notes**: Finally finished Intermediate Algorithm Scripting, just five slightly difficult projects to go and the cert is mine!

**Code**:
Continue working on this tomorrow, it works but it's not completing the exercise properly :/ 
```
const roman = {
M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function convertToRoman(num) {
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
```

### Day 42: May 20, 2020
#### 97 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: JavaScript Algorithms and Data Structures Projects 3/5

**Notes**: Gave up working out why my roman numeral converter didn't complete the exercise, as it returned all the correct values. Stole a solve from the docs instead, which afaik returned the exact same values as my solve above. Very confusing!


### Day 43: May 21, 2020
#### 100 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: JavaScript Algorithms and Data Structures Projects 4/5

**Notes**: Today I wrote probably the worst US telephone number validator in history, but it finally passed. Included below for what ever the opposite of bragging rights is. Tomorrow I should check out the solves from the docs as I usually do.

**Code**:
```
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
  // filter out those pesky negatives and weird ()'s
  if (newArray[0] !== '-' && newArray[newArray.length - 1] !== ')')
  // filter out all numbers with missing ()'s
  if (newArray.indexOf('(') >= 0 && newArray.indexOf(')') >= 0 
  // but not the ones with no ()'s at all
  || newArray.indexOf('(') == -1 && newArray.indexOf(')') == -1) {
    // map to parseInt, then filter out all numbers
    newArray = newArray.map(x => parseInt(x)).filter(n => isNumber(n));
    let length = newArray.length
    // check the length, if > 10, ensure US country code
    if (length === 10 || length === 11 && newArray[0] === 1) {
        return true; 
      }}
  return false;
};
```

### Day 44: May 22, 2020
#### 96 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: JavaScript Algorithms and Data Structures Projects 4/5

**Notes**: Checked out the solves from yesterdays telephone num validator and they're.... using a single RegEx. I knew I didn't exactly ace it, but it's humbling to see it solved in a single regEx, albeit a little annoying. For anything production, I'd hesitate to use either solution and would probably rather pick a specific js library to solve this problem, as that seems a little more bullet- and futureproof. Anyway, the final project is difficult, difficult, lemon, difficult.

Working on the final piece for the cert; a cash registry thing.

### Day 45: May 23, 2020
#### 60 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp

**Today's Progress**: JavaScript Algorithms and Data Structures Projects 4/5

**Notes**: ....Still working on the cash registry thing.

### Day 46: May 24, 2020
#### 90 minutes
##### JavaScript Algorithms and Data Structures Certification from FreeCodeCamp & Codecademy

**Today's Progress**: JavaScript Algorithms and Data Structures Projects 5/5 && starting codecademy lessons on basic js

**Notes**: FINISHED with the FCC cert! Codecademy is quite different from fcc, so I'm still finding my legs, but on or about lesson 8. Will update this either tomorrow or another time, if I stick with the basic js ones. Some I need the practice, others I get and some I still need the practice, but the problem formulation is so convoluted I'm not sure what it wants from me. 

### Day 47: May 25, 2020
#### 68 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Iterators, Objects and classes

**Notes**: I'm skipping through the codecademy course to pick up some things I missed first time around with fcc. Just started on 'classes' at the end of today, so I will probably do those tomorrow. Also added a new folder for codecademy to the github, but there's only one file there so far, as I forgot to save my previous work.

**Other**: Happy towel day everyone!

### Day 48: May 26, 2020
#### 130 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Classes

**Notes**: Spent time with classes today, how to set them up and how to user super- and subclasses. I also took a look at the new lesson, browser compatibility and transpilation, and decided to skip it. Rewriting ES6 to ES5 seems a waste of time these days, although the section on caniuse.com was helpful. Tomorrow it's modules, which weren't covered in the freecodecamp courses, so I'm looking forward to that.

**Code**: Notes in code from class classes today
```
// superclass
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  // static method
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}
// subclass Nurse
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = [certifications];
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    return this._certifications.push(newCertification);
  }
};
// subclass Doctor
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = false;
  }
}
// testing
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
const docDeath = new Doctor('Death', false);
console.log(nurseOlynyk);
console.log(docDeath);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
```
And then I built a small library, as per Codecademy instructions:
```
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this.title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    return (this._ratings.reduce((a, b) => a + b, 0) / 
           (this._ratings.length)).toFixed(2);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(...x) {
    this._ratings.push(...x);
  }
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
};

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
};

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = [songs];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
};

// testing
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
```

### Day 49: May 27, 2020
#### 80 minutes
##### GatsbyJS: Updates and fixes

**Today's Progress**: Gatsby JS fixes

**Notes**: Todays courseload, and probably tomorrows, has been cancelled due to having to do some work with gatsbyjs. Spent my time today optimizing a gatsby site for re-deployment with SSL.

### Day 50: May 28, 2020
#### 160 minutes
##### GatsbyJS: CSS etc

**Today's progress**: Drew some css flags and added them to the site.

**Notes**: The flags took a while, 'cause I've never drawn anything in CSS before, and although css and gatsby is better than nothing, I'm slightly annoyed at having been pulled away from my vanilla JS exploration. Could do both? Not enough time right now, but this'll all be finished soon, hopefully.

### Day 51: May 29, 2020
#### 60 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Modules

**Notes**: Waiting on client, so going back to exercises. Yay! Currently learning about modules. Wrote up everything I learned about import and export and put it in modules-airplanes.js in the Codecademy Basic JS folder.

### Day 52: May 30, 2020
#### 74 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Modules

**Notes**: Finished up yesterdays modules lessons and started on the module projects. Fnished the first one, modules-msg-mixer.js and started work on the next one, modules-employee-lookup.js, but haven't finished the latter one yet. Hopefully, I'll have time to do this tomorrow. Also aced the modules quiz :)

### Day 53: May 31, 2020
#### 70 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Modules and Promises

**Notes**: Finished up yesterdays module project and added it to the basic js Codecademy folder here. Now I'm looking at promises. I also did a quick magic 8 ball from the conditionals classes, 'cause I realised I'd forgotten the correct syntax for a switch.

### Day 54: June 1, 2020
#### 60 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Promises

**Notes**: Not feeling that motivated today, as it's hot as all hell. Still cranked out a slow, grueling 60 minutes on Promises tho. Hopefully, some of it stuck, to help myself out in the future, I added a bunch of comments in sunglasses-part-three.js.

### Day 55: June 2, 2020
#### 160 minutes
##### GatsbyJS: Updates and fixes

**Today's Progress**: Gatsby JS fixes

**Notes**: Aargh. Not much to say. Have barely been coding, mostly just fooling around with settings and plugins to improve the lighthouse score and get things exactly as the client wants 'em.

### Day 56: June 3, 2020
#### 255 minutes
##### GatsbyJS: Updates and fixes

**Today's Progress**: Gatsby JS fixes

**Notes**: Same as yesterday...

### Day 57: June 4, 2020
#### 160 minutes
##### GatsbyJS: Updates and fixes

**Today's Progress**: Gatsby JS fixes

**Notes**: Same as yesterday...

### Day 58: June 5, 2020
#### 105 minutes
##### GatsbyJS: Updates and fixes

**Today's Progress**: Gatsby JS fixes

**Notes**: Same as yesterday...

### Day 59: June 6, 2020
#### 55 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Promises

**Notes**: Client server is down, so my downtime is up. Returned to js promises. Turns out, I was nearly done with the promise lessons, here are some takeaways:
- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
- Promises can be in one of three states: pending, resolved, or rejected.
- A promise is settled if it is either resolved or rejected.
- We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
- setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
- We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
- We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
- To use promise composition correctly, we have to remember to return promises constructed within a .then().
- We should chain multiple promises rather than nesting them.
- To take advantage of concurrency, we can use Promise.all().

I do feel a little bit like I've lost a lot of learning while fixing the three gatsby sites for the past 4-5 days, which annoys me. Hopefully, it'll come back to me. Spent some time reading over my promises-*.js files to reacqaint myself.

### Day 60: June 7, 2020
#### 60 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Async

**Notes**: Started on Async lessons.. Also did a bit of gatsby work.

### Day 61: June 8, 2020
#### 57 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Async

**Notes**: Continued Async lessons.. Also did a bit of gatsby work.

### Day 62: June 9, 2020
#### 95 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: Async

**Notes**: Continued and finished Async lessons.. Also did some gatsby work and participated in discussions on git. Next up is is the final lesson on codecademy basic js, which is HTTP requests.

Async Review
- async...await is syntactic sugar built on native JavaScript promises and generators.
- We declare an async function with the keyword async.
- Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending.
- await returns the resolved value of the awaited promise.
- We can write multiple await statements to produce code that reads like synchronous code.
- We use try...catch statements within our async functions for error handling.
- We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.


### Day 63: June 10, 2020
#### 70 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: HTTP requests

**Notes**: HTTP AJAX Requests Review
- JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript’s asynchronous capabilities.
- There are many HTTP request methods, two of which are GET and POST.
- GET requests only request information from other sources.
- POST methods can introduce new information to other sources in addition to requesting it.
- GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.
- POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.
- Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.
- To add a query string to a URL endpoint you can use ? and include a parameter.
- To provide additional parameters, use & and then include a key-value pair, joined by =.
- Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you’re working.


### Day 64: June 11, 2020
#### 225 minutes
##### Codecademy Basic Javascript

**Today's Progress**: Codecademy Basic Javascript Course: HTTP requests

**Notes**: HTTP AJAX Requests (with es6 in the form of fetch)
- GET and POST requests can be created a variety of ways.
- Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.
- Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.
- fetch() is a web API that can be used to create requests. fetch() will return promises.
- We can chain .then() methods to handle promises returned by fetch().
- The .json() method converts a returned promise to a JSON object.
- async is a keyword that is used to create functions that will return promises.
- await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.
- await can only be used within functions declared with async.

I finished up the codecademy basic js course lessons on http requests. Whether or not it'll stick, I'm not so sure, but at least I did it and completed the project which required all the new-to-me-keywords like fetch(), async, await, try and catch. Now I'm looking at three different courses and I can't quite decide where to go, so here are some notes in relation to that:
[X] Node.js course: Pro course, meaning I'll lose access to it at some point. Only takes two hours tho.
[] Express.js: Pro course, again, will lose access, but takes a bit longer.
[] React.js part 1 and 2: This is a free course. It's what I want to do, but it seems almost fiscally irresponsible to do so.

I'll X the one I pick tomorrow... I'm also slightly tempted to try my hand at a pull request for a gatsby-plugin with a very kind creator, let's see. I think it might be node.js, then gatsby plugin, then express and finally react. A surprise option would be to finish the entire basic js course just to brush up on some basic skills, but I'm not sure that's for right now... 


### Day 65: June 12, 2020
#### 232 minutes
##### Codewars puzzles

**Today's Progress**: Okay, so I decided to play around with codewars, which I shouldn't have done...

**Notes**: Spent way too long on these. Turns out, I'm better, but still no ninja.

**Code**: First this thing:
```
/* Given a positive integer n, calculate the following sum:
 n + n/2 + n/4 + n/8 + ...
 Example: 25  =>  25 + 12 + 6 + 3 + 1 = 47 */

const halvingSum = n => {
  let array = [n];
  while (n > 1) {
    let i = 2;
    let result = Math.floor(n / i);
    array.push(result);
    i *= 2;
    n -= n/2;
  }
  return array.reduce((a, b) => (a + b));
}
```
And then this one:
```
/* Given a standard english sentence passed in as a string, write a method that will return a 
sentence made up of the same words, but sorted by their first letter. 
However, the method of sorting has a twist to it:
- All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
- All words that begin with an upper case letter should come after that, and should be sorted in descending order.
If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded. */

function sort(sentence){
  let array = sentence.match(/[^_\W]+/g);
  let arrayUppercase = [];
  let arrayLowercase = [];
  array.forEach((elem) => {
    if (elem[0] === elem[0].toUpperCase()) {
      arrayUppercase.push(elem);
    } else {
      arrayLowercase.push(elem);
    }
  })
  arrayUppercase = arrayUppercase.sort().reverse();
  arrayLowercase = arrayLowercase.sort()
  return arrayLowercase.concat(arrayUppercase).join(' ');
}
```
which i refactored to:
```
function sort(sentence){
  let array = sentence.match(/[^_\W]+/g);
  let arrayUppercase = [];
  let arrayLowercase = [];
  array.forEach((elem) => elem[0] === elem[0].toUpperCase() ? arrayUppercase.push(elem) : arrayLowercase.push(elem));
  return arrayLowercase.sort().concat(arrayUppercase.sort().reverse()).join(' ');
}
```
and finally this, which took ages as well, because I forgot certain things are immutable!
```
/* You are given a secret message you need to decipher. 
Here are the things you need to know to decipher each word:
- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)

function decipherThis(str) {
  let array = [];
  let result = [];
  let code = str.split(' ');
  code.forEach((elem) => array.push(elem.replace(parseInt(elem), String.fromCharCode(parseInt(elem)))));
  array.forEach((elem) => {
    if (elem.length >= 3) {
      let word = elem.split('');
      let secondLetter = word[1];
      let lastLetter = word[elem.length - 1];
      word[1] = lastLetter;
      word[elem.length - 1] = secondLetter;
      result.push(word.join(''));
    } else {
      result.push(elem);
    }})
    return result.join(' ');
};
```
All this tells me is I still need to get better with the built in methods like .map, that's if I want to keep up on codewars.

**Notes 2**:...Had some spare time and decided to start the node.js lessons as well, here's an important takeaway: 
"Node is REPL: REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again."

### Day 66: June 13, 2020
#### 85 minutes
##### Codecademy Node.js

**Today's Progress**: 13/15 on the node.js lessons

**Notes**: I'm not sure I'm really learning anything about node.js, well, a little, but it seems quite confusing right now when coming from vanilla js.

### Day 67: June 14, 2020
#### 57 minutes
##### Codecademy node.js and Building Interactive JavaScript Websites

**Today's Progress**: finished node.js lessons. Started Building Interactive JavaScript Websites lessons

**Notes**: Takeaways from the node.js lessons.

- Node.js is a JavaScript runtime, an environment that allows us to execute our JavaScript code by converting it into something a computer can understand.
- REPLs are processes that read, evaluate, print, and repeat (loop), and Node.js comes with its own REPL we can access in our terminal with the node command.
- We run JavaScript programs with Node in the terminal by typing node followed by the file name (if we’re in the same directory) or the absolute path of the file.
- Code can be organized into separate files, modules, and combined through requiring them where needed using the require() function.
- In addition to core modules, modules included within the environment to efficiently perform common tasks, we can also create our own modules using module.exports and the require() function.
- We can access NPM, a registry of hundreds of thousands of packages of re-usable code from other developers, directly through our terminal.
- Node has an event-driven architecture.
- We can make our own instances of the EventEmitter class and we can subscribe to listen for named events with the .on() method and emit events with the .emit() method.
- Node uses an event loop which enables asynchronous actions to be handled in a non-blocking way by adding callback functions to a queue of tasks to be executed when the callstack is empty.
- In order to handle errors during asynchronous operations, provided callback functions are expected to have an error as their first parameter.
- Node allows for both output, data/feedback to a user provided by a computer, and input data/feedback to the computer provided by the user.
- The Node fs core module is an API for interacting with the file system.
- Streams allow us to read or write data piece by piece instead of all at once.
- The Node http core module allows for easy creation of web servers, computer processes that listen for requests from clients and return responses.

Also an update on my Codecademy learning path OR courses I'm interested in. This time including finished courses
[X] Node.js course (pro)
[] Express.js (pro)
[] React.js part 1 and 2
[X] Basic JS
[] Building Interactive JS websites (pro)

### Day 68: June 15, 2020
#### 60 minutes
##### Codecademy Building Interactive JavaScript Websites and codewars

**Today's Progress**: got extremely bored with the Building Interactive JavaScript Websites lessons, did a kata on codewars instead.

**Notes**:
- The DOM is a structural model of a web page that allows for scripting languages to access that page.
- The system of organization in the DOM mimics the nesting structure of an HTML document.
- Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
- The DOM also allows access to the regular attributes of an HTML element such as its style, id, etc.

**Code**:
```
// make a rot13 encoder
const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

const rot13 = msg => {
  const encode = x => input.indexOf(x) > -1 ? output[input.indexOf(x)] : x;
  return msg.split('').map(encode).join('')
};
```

### Day 69: June 16, 2020 
#### 275 minutes
##### Codecademy Building Interactive JavaScript Websites and GatsbyJS

**Today's Progress**: Gatsby plugins work. Returned to lesson plan.

**Notes**: Spent a while trying to wrap my head around how gatsby plugins work. Learnt a lot, but I'll need more hands-on with React before I attempt anything further, is my guess. The JS itself I can understand, it's all the other stuff around it that's a little confusing. Returned to lesson plan with notes below.

- The document keyword grants access to the root of the DOM in JavaScript
- The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method
- You can also access an element directly by its ID with .getElementById()
- The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
- You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively
- The .onclick property can add interactivity to a DOM element based on a click event

Also, I wrote a small game as per codeacademy instructions. It's in the JS websites folder under chore-door. It took ages!

### Day 70: June 17, 2020 
#### 78 minutes
##### Codecademy Building Interactive JavaScript Websites, GatsbyJS and Apache.

**Today's Progress**: Deployed two sites to client servers, last site has permissions problems, which luckily aren't mine. Returned to lessons.

**Notes**: Annoying with the server permissions problems (403), but hopefully it's fixed soon and I can finally be done with them and concentrate on learning some other stuff :)


### Day 70: June 18, 2020 
#### 158 minutes
##### Codecademy Building Interactive JavaScript Websites

**Today's Progress**: Finished some event lessons, see notes below.

**Notes**:
- Events are user interactions and browser manipulations on the document object model.
- JavaScript engines register events as objects with properties and methods associated with them.
- Event handlers are registered as properties of their event object.
- Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
- The .addEventListener() method can be used to add multiple event handler functions to a single event.
- The .removeEventListener() method stops specific event handlers from “listening” for specific events firing.
- Remember to always use 'on' before stuff like keypress, click, mouseover.
- Not all DOM events have event handlers associated with them.
- JavaScript interprets events as event object that store event information residing in properties and methods

Also did a "piano player" project, which was just terrible. Waste of time tbh. Tomorrow it's intro to handlebars! 
...Did a little more work on a kata from codewars, simply because the piano exercise annoyed me.. Answer tomorrow

### Day 71: June 19, 2020 
#### 90 minutes
##### Codecademy Building Interactive JavaScript Websites and Codewars

**Today's Progress**: Finished kata, started handlebars.js

**Notes**: A little tired today, but finished the kata from yesterday and started the lessons on handlebars.js, tho I still have a ways to go there.

**Code**:
```
/* If you divide each number by the greatest common factor, it gives you the correct code to the chest.
Example Clue: "A2B4C6"
Greatest common factor = 2
2 / 2 = 1
4 / 2 = 2
6 / 2 = 3
Code: "A1B2C3" */

//my solve
const euclid = (a, b) => b == 0 ? a : euclid(b, (a % b));
const treasureCode = (clue) => {
  let pirateArray = [];
  let letArray = clue.match(/[a-zA-Z]+/g);
  let numArray = clue.match(/\d+/g);
  numArray = numArray.map(n => n / numArray.reduce(euclid));
  for (let i = 0; letArray.length > i; i++) {
    pirateArray.push(letArray[i], numArray[i])
  }
  return pirateArray.join('');
};
```

### Day 72: June 20, 2020 
#### 110 minutes
##### Codecademy Building Interactive JavaScript Websites and Github

**Today's Progress**: Continuing lessons on handlebars.js. Created pull request for gatsby docs re my apache problem.

**Notes**: Handlebars.js recap:
- Handlebars is an external library used to create templates which are a mix of HTML, text, and expressions.
- Handlebars uses expressions which are wrapped inside double braces like: `{{someVariable}}`
- A script tag with a type of "text/x-handlebars-template" is used to deliver a template to the browser.
- Handlebar.compile() returns a templating function from a template script intended for Handlebars.
- A template created from .compile() will take an object as an argument and use it as context to generate a string containing HTML.
- Handlebars has built in block helpers which can be included in a Handlebars script.
- Block helpers have a starting expression and an ending expression. The starting expression will have a # appears before a keyword. The ending expression will have the same keyword but with a / character to denote the end.
- The `{{if}}` will conditionally render a block of code.
- An `{{else}}` expression can be inserted into an if helper block and used as part of the conditional statement.
- `{{each}}` is another built-in helper expression which accepts an an array to iterate through.
- In the block helper functions, the `{{this}}` expression gives context and serves as a placeholder for the current value.

Just started on the handlebars.js project; refactoring a music site from static html to handlebars.js templating. Will attempt to finish tomorrow, but am whiped out for today, I think.


### Day 73: June 21, 2020 
#### 150 minutes
##### Codecademy Building Interactive JavaScript Websites and codewars

**Today's Progress**: Finished Codecademy Building Interactive JavaScript Websites.

**Notes**: Refactored a static html website 'musicon' to use handlebars.js templating. Considering starting the express course now?

- [X] Node.js course (pro)
- [] Express.js (pro) This one next, I think.
- [] React.js part 1 and 2
- [X] Basic JS
- [X] Building Interactive JS websites (pro)

Decided to struggle a little with a codewars puzzle rather than making my mind up today. Right now, it's not working, but hopefully I'll get it working either later today or tomorrow.


### Day 74: June 22, 2020 
#### 155 minutes
##### Codewars

**Today's Progress**: Failed my kata, but put in the time.

**Notes**: Could absolutely not get it working, but it was a learning experience none the less. One thing that annoyed me immensely was the debugging part of it, which did not show passed tests, only the failed ones, which made my hurricane of if else statements an absolute nightmare. Two hours and thirty minutes I spent on that, not counting the time from yesterday!

Deffo do the express.js course tomorrow, as today felt like a complete waste.


### Day 75: June 23, 2020 
#### 65 minutes
##### Codecademy Introduction to Express.js

**Today's Progress**: Started expressJS lessons.

**Notes**: Very tired for no reason.


### Day 76: June 24, 2020 
#### 80 minutes
##### Codecademy Introduction to Express.js

**Today's Progress**: Continued expressJS lessons.

**Notes**: Mental note, it might be fun to build an API with something like express-no-stress, rather than hardcoding one.


### Day 77: June 25, 2020 
#### 182 minutes
##### Codecademy Introduction to Express.js

**Today's Progress**: Continued expressJS lessons.

**Notes**: Doing an express project api in the Codecademy/Express JS/quote-api-starting folder and finding it difficult, but rewarding.


### Day 78: June 26, 2020 
#### 72 minutes
##### Codecademy Introduction to Express.js

**Today's Progress**: Continued expressJS lessons.

**Notes**: Finished my small api in the Codecademy/Express JS/quote-api-starting folder. It works! Next up tomorrow is an introduction to middleware functions in expressJS, which means I'll be refactoring and/or cleaning up some spaghetti DRY-violating code... Sounds useful, if a little dull :)



### Day 79: June 27, 2020 
#### 88 minutes
##### Codecademy Introduction to Express.js

**Today's Progress**: Continued expressJS lessons.

**Notes**: Nearly died from boredom and heatexhaustion while coding today. Learning about middleware functions in express, which just seems like anoter word for functional programming.

**Notes part two**: I seriously fell asleep writing the above sentence after just an hour with the codecademy expressJS stuff. It is unbearably boring with constant "learn A, now forget A, B is much better! Remeber A? It's better than B now, if it wasn't for C, so delete everything and write D"-refactoring and it's wrinkling my brain. I'm seriously considering dropping this course and taking the API one on freecodecamp instead. Maybe a third option? It's not an uninteresting subject, but the constant introductions of ABC when D is best practice is maddening.


### Day 80: June 28, 2020 
#### 60 minutes
##### Codecademy Basic JS

**Today's Progress**: Reaffirming some basic JS.

**Notes**: The express course continued to annoy me, so I've put it on pause. I read the lesson plan for freecodecamps express module and it seems better setup, so I'll probably go with that sometime in the future. But for now, I'm getting back to some JS basics to reaffirm what I've already learned. In fact, I went back to brush up on objects, specifically the notation:

- Objects store collections of key-value pairs.
- Each key-value pair is a property—when a property is a function it is known as a method.
- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
- You can access, add or edit a property within an object by using dot notation or bracket notation.
- We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
- We can navigate complex, nested objects by chaining operators.
- Objects are mutable—we can change their properties even when they’re declared with const.
- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
- We can iterate through objects using the For...in syntax.

I'll continue with more objects and maybe some object projects tomorrow. Javascript is fun again :)


### Day 81: June 29, 2020 
#### 60 minutes
##### Codecademy Basic JS

**Today's Progress**: Reaffirming some basic JS.

**Notes**: From the advanced objects lessons:
- The object that a method belongs to is called the calling object.
- The this keyword refers the calling object and can be used to access properties of the calling object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of this depends on where the this is being accessed from.
- We cannot use arrow functions as methods if we want to access other internal properties.
- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
- Setters and getter methods allow for more detailed ways of accessing and assigning properties.
- Factory functions allow us to create object instances quickly and repeatedly.
- There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

Continuing to build a small meal maker object thingy tomorrow.


### Day 82: June 30, 2020 
#### 55 minutes
##### Codecademy Basic JS

**Today's Progress**: Reaffirming some basic JS.

**Notes**: Finished my meal maker obejcts project. Considering doing a small terminal/node game project tomorrow.


### Day 83: July 1, 2020 
#### 60 minutes
##### Codecademy PhaserJS

**Today's Progress**: Started PhaserJS lessons.

**Notes**: I found that building small games was really enjoyable with the chore-door project I did in the Build JavaScript Webpages, so I'll look into PhaserJS.


### Day 84: July 2, 2020 
#### 65 minutes
##### Codecademy PhaserJS

**Today's Progress**: Continued PhaserJS lessons.

**Notes**: Enjoying these lessons so far. Here's a review of what I learned in the first module:
Think about games that you’ve played and try to imagine how they break down into the following steps:

- Loading in assets (all the sounds and images for your game: 3D models and textures would also be assets here although that isn’t something we’re going to be handling in Phaser).
- Setting up a scene by creating all of the interactive game objects.
- Adding event listeners and handlers to those game objects.
- Updating the scene each frame, detecting if buttons are pressed and triggering events based on those button presses.

See learning.js and basics.js in Codecademy/Phaser JS for more details and the code from the first module.


### Day 85: July 3, 2020 
#### 66 minutes
##### Codecademy PhaserJS and Objects

**Today's Progress**: Completed a quick objects project. Continued PhaserJS lessons.

**Notes**: Wanted to reaffirm objects before continuing, so I did a small project from the basic js codecademy course on objects. It's dawned on me, that if I want to get 100% on the course and potentially get the certification, I'll need to finish all the basic projects. Rest of the hour was spent on building small paint-by-numbers game.


### Day 86: July 4, 2020 
#### 72 minutes
##### Codecademy PhaserJS and gatsby docs

**Today's Progress**: Rewrote a PR for the gatsby docs. Continued PhaserJS lessons.

**Notes**: Spent a bit of time on the pull request, then started making an adventure game a la the swords and sorcery books. Not done yet, will be tomorrow.


### Day 87: July 5, 2020 
#### 60 minutes
##### Codecademy PhaserJS and Docker 

**Today's Progress**: Installed Docker. Continued PhaserJS lessons.

**Notes**: I'd like to play around a bit more with Docker when I've got time, but not right now I don't think. I created a small arcade style game with phaserJS today, it went pretty well, a little too well maybe, but it works and it's quite fun. The exercise has a few ways to 'challenge yourself' at the end of it, so I think I might do that, just to reaffirm some of what I've learned. I highly doubt you'll see anything from me on the top 10 game scorelist soon tho :D


### Day 88: July 6, 2020 
#### 62 minutes
##### Codecademy PhaserJS  

**Today's Progress**: So tired I nearly died, but finished regardless.

**Notes**: Following along building a space invader clone. Right now it's not working, maybe tomorrow. Nothing is displayed at least, could be a bad connection on my part? (Nope. It's a bug!)

### Day 89: July 7, 2020 
#### 120 minutes
##### Codecademy PhaserJS  

**Today's Progress**: Continued PhaserJS lessons.

**Notes**: Finished my space invaders clone. It works OK, not perfect, but very playable. Spent most of today searching for a bug, which turned out to be either an extra .this, a misplaced comma, a missing () on a method or all three. Happy with the end result tho.


### Day 90: July 8, 2020 
#### 60 minutes
##### Codecademy PhaserJS  

**Today's Progress**: Continued PhaserJS lessons.

**Notes**: Nothing much to say. Learning about animations right now. I can't decide if learning phaserJS is a waste of time or not, it's not likely to be at all relevant in the future, but there are some basic JS things like objects, classes, etc., which I refresh while doing it, so hopefully that'll weigh up.


### Day 91: July 9, 2020 
#### 68 minutes
##### Codecademy PhaserJS  

**Today's Progress**: Continued PhaserJS lessons.

**Notes**: Realised I have codecademy pro until 26 July 2020. That's about another two weeks. I should probably spend that time a little more wisely than playing around with PhaserJS? Still finished a game tho and the course is nearly done, so might as well complete it. Just a few more lessons to go covering visual effects. Final project looks to be a sort of doodle jump-y game, so that could be fun. I also checked the LÔVE Lua framework thing for game designing and it actually looks quite similar to the syntax in PhaserJS, if not exactly Javascript.


### Day 92: July 10, 2020 
#### 110 minutes
##### Codecademy PhaserJS  

**Today's Progress**: Continued PhaserJS lessons. Helped with HTML.

**Notes**: Completed a sorta platformer while learning about PhaserJS camera and effects. Pretty fun and not that far from supermario! That took an hour, then I spent nearly the same amount of time helping a fellow 100daysofcode-coder, who couldn't get a landing page to pass on freecodecamp. Turns out it wanted anchor links to id="x", not name="x", tho both worked, only one passed the tests.


### Day 93: July 11, 2020 
#### 112 minutes
##### Codecademy PhaserJS  

**Today's Progress**: Completed PhaserJS lessons. Completed Basic JS course.

**Notes**: Last phaserJS project was a bit of a let down, but I could spend more time on it later? Also realised I lacked the lessons on transpilation and browser compatibility from the basic JS course, so jumped in and finished those off. Takeaways below:

- ES5 — The old JavaScript version that is supported by all modern web browsers.
- ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, - and addresses the source of common bugs in ES5.
caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
- Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
- npm init — A terminal command that creates a package.json file.
- package.json — A file that contains information about a JavaScript project.
- npm install — A command that installs Node packages.
- babel-cli — A Node package that contains xcommand line tools for Babel.
- babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
- .babelrc — A file that specifies the version of the JavaScript source code.
- "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
- npm run build — A command that runs the build script and transpiles ES6+ code to ES5.

Steps needed to set up a project for transpilation:
Initialize your project using npm init and create a directory called src
Install babel dependencies by running
npm install babel-cli -D
npm install babel-preset-env -D
Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
Run npm run build whenever you want to transpile your code from your src to lib directories.


### Day 94: July 12, 2020 
#### 65 minutes
##### Codecademy Basic JS Projects  

**Today's Progress**: Reaffirming some basic JS stuff with codecademy projects.

**Notes**: Doing coding challenges.. Still taking some time :/


### Day 95: July 13, 2020 
#### 161 minutes
##### Codecademy Basic JS Projects  

**Today's Progress**: Reaffirming some basic JS stuff with codecademy projects.

**Notes**: Continued from yesterday with building a credit card number validator. It's done now, but it took almost a total of a 100 minutes! Continued with another project, which is also taking me a while, but feel like I'm (re)learning a lot.


### Day 96: July 14, 2020 
#### 133 minutes
##### Codecademy Basic JS Projects  

**Today's Progress**: Reaffirming some basic JS stuff with codecademy projects.

**Notes**: Finished the 'mysterious organism' factory function project I started yesterday. Enjoyed the challenge. Did a little more expressJS, which I didn't enjoy, and then started the git course simply cause I was bored. Might not finish it, but it would be helpful to have a better command of git in future. 

Use Git commands to help keep track of changes made to a project:
- git init creates a new Git repository
- git status inspects the contents of the working directory and staging area
- git add adds files from the working directory to the staging area
- git add . adds all files to staging area
- git diff shows the difference between the working directory and the staging area
- git commit permanently stores file changes from the staging area in the repository
- git log shows a list of all previous commits


### Day 97: July 15, 2020 
#### 60 minutes
##### Codecademy Git course

**Today's Progress**: Finished the git course I started on a whim yesterday. Also did a very simple bugfixing kata on codewars.

**Notes**: Continued from day 96.

- git checkout HEAD filename: Discards changes in the working directory.
- git reset HEAD filename: Unstages file changes in the staging area.
- git reset commit_SHA: Resets to a previous commit in your commit history.

- git branch: Lists all a Git project’s branches.
- git branch branch_name: Creates a new branch.
- git checkout branch_name: Used to switch from one branch to another.
- git merge branch_name: Used to join file changes from one branch to another.
- git branch -d branch_name: Deletes the branch specified.

- git clone: Creates a local copy of a remote.
- git remote -v: Lists a Git project’s remotes.
- git fetch: Fetches work from the remote into the local copy.
- git merge origin/master: Merges origin/master into your local branch.
- git push origin <branch_name>: Pushes a local branch to the origin remote.


### Day 98: July 16, 2020 
#### 85 minutes
##### Codecademy React I Course

**Today's Progress**: Started the React I course

**Notes**: Finally started on React, which was the main reason I wanted to do 100 days of code, so that's exciting. Hopefully all my mostly vanilla JS studying will help me in this endeavour.



## MISSED A DAY DUE TO CODECADEMY BEING DOWN


### Day 99: July 18, 2020 
#### 88 minutes
##### Codecademy React I Course

**Today's Progress**: Continued React I course.

**Notes**: Did a few components, notes are in the files. Correction from yesterdays blip: It's cloudflare having a flare up, which tanked like half the internet.


### Day 100: July 19, 2020 
#### 72 minutes
##### Codecademy React I Course

**Today's Progress**: Continued React I course

**Notes**: Day 100, wow! I am by no means done, so I think what I'll do is I'll stick with it until the react course I and II is done. Or at least until my codecademy pro account runs out, which should be soon.


### Day 101: July 20, 2020 
#### 95 minutes
##### Codecademy React I Course

**Today's Progress**: Finished the React I course.

**Notes**: Notes in the files again. Will start on React II course next.



### Day 102: July 21, 2020 
#### 80 minutes
##### Codecademy React II Course

**Today's Progress**: Started the React II course.

**Notes and Code**: Child Components Update Sibling Components
> "We were building worlds within worlds" -- Elroy Patashnik (a private joke)

In lesson 1, I learned my first React programming pattern: A stateful, parent component passes down a prop to a stateless, child component.

In lesson 2, I learned that lesson 1’s pattern is actually part of a larger pattern: A stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent’s state.

Finally, below the pattern will be expanded one last time:  A child component updates its parent’s state, and the parent passes that state to a sibling component.


Components should only have one job tho. In the react-stateless-changes-state.jsx, Child.js had two jobs:
1 - Child displayed a name.
2 - Child offered a way to change that name.

Here, I'll to make like Solomon and divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.

```
///// Sibling.js /////

import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    // 6. That stateless component class receives the state and displays it.
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
```
```
///// Child.js /////

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  // 3. That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument.
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}> <!-- 4. The stateless component class uses this new function as an event handler: 
                                                When an event is detected, the parent’s state updates   -->
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
```
```
///// Parent.js /////

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  // 1. A stateful component class defines a function that calls this.setState
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  /* 7. An instance of the stateful component class is rendered. One stateless 
        child component displays the state, and a different stateless child 
        component displays a way to change the state */
  render() {
    return (
      <div>
        <Child onChange={this.changeName} /> <!-- 2. The stateful component passes that function down to a stateless component. -->
        <Sibling name={this.state.name} /> <!-- 5. The stateful component class passes down its state, distinct from the ability to 
                                                   change its state, to a different stateless component. -->
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
```
The Pattern in full here, refer to comments above to see the specific code:
- A stateful component class defines a function that calls this.setState. (Parent.js)
- The stateful component passes that function down to a stateless component. (Parent.js)
- That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js)
- The stateless component class uses this new function as an event handler. (Child.js). When an event is detected, the parent’s state updates. 
- The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js)
- That stateless component class receives the state and displays it. (Sibling.js)
- An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the state. (Parent.js)*/
