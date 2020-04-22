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

**Notes**: Fnished the ES6 lessons, started on Regular Expressions. Discovered https://javascript30.com/ and signed up. Haven't started it yet tho.
