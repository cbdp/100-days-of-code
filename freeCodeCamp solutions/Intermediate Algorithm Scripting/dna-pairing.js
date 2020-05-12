// Base pairs are a pair of AT and CG.
// Match the missing element to the provided character.

// my simple solve:
function pairElement(str) {
  let newArray = str.split('');
  let results = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 'C') {
      results.push(['C', 'G']);
    } else if (newArray[i] === 'G') {
      results.push(['G', 'C']);
    } else if (newArray[i] === 'T') {
      results.push(['T', 'A']);
    } else if (newArray[i] === 'A') {
      results.push(['A', 'T']);
    }
  }
  return results;
};


// solve from the docs with a switch
function pairElementSwitch(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
};


// solve from the docs with .map, which is probably the neatest:
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
};

// tests
pairElement("GCG");
pairElement("TTGAG");