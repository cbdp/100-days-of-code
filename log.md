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