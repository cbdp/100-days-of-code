function mutation(arr) {
  let arrayZero = arr[0].toLowerCase().split('').sort();
  let arrayOne = arr[1].toLowerCase().split('').sort();
  let newArray = [];

  for (let i = 0; i < arrayZero.length + 1; i++) {
    if (arrayZero.indexOf(arrayOne[i]) >= 0) {
      newArray.push(arrayOne[i]);
    }
  };
  return arrayOne.length === newArray.length;
};

mutation(["Mary", "Aarmy"]);

/* made it much harder than it had to be, so this took me more than an hour. I'd
Forgotten about .indexOf() and I was nesting for loops and if statements like a maniac.

The official solution is this one, which is better and cleaner, tho it looks a little
Weird in places:

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

*/