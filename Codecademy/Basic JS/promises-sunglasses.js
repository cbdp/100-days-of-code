const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) { 
    resolve('Sunglasses order processed.'); 
  } else { 
    reject('That item is sold out.');
  }
};

const orderSunglasses = () => new Promise(myExecutor);
const orderPromise = orderSunglasses();

console.log(orderPromise);


/* 

to run use:
$ node promises-sunglasses.js

should return:
Promise { 'Sunglasses order processed.' }

*/