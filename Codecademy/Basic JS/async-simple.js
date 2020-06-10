// constructing the promise
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})



// same as withConstructor, but using async instead of a constructor
async function withAsync(num) {
  if (num === 0) {
    return 'zero';
  } else {
    return 'not zero';
  }
}

/* async functions always return a promise. This means we can 
use traditional promise syntax, like .then() and .catch with 
our async functions. */
// like:
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})