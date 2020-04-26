/* Another huge advantage of the spread operator, is the ability to
 combine arrays, or to insert all the elements of one array into another,
  at any index. With more traditional syntaxes, we can concatenate 
  arrays, but this only allows us to combine arrays at the end of one, 
  and at the start of another. 
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
