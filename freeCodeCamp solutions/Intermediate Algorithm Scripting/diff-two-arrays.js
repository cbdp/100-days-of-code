// I'll admit it, I googled after failing with a double for loop
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
