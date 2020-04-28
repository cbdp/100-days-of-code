// first solve with substring
function confirmEnding(str, target) {
  let compare = str.substring(str.length - target.length, str.length);
  return (compare === target) ? true : false;
};

// alternative one-liner with slice
const confirmEnding = (str, target) => str.slice(str.length - target.length) === target;
 

// alternative with regex and a constructor
function confirmEnding(str, target) {
  let regex = new RegExp(target + "$", "i");
  return regex.test(str);
}

// endsWith one-liner (probably best practice)
const confirmEnding = (str, target) => str.endsWith(target);



confirmEnding("Bastian", "n");