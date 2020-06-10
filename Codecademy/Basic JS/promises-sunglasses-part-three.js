// LIBRARY.JS

const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};


/* checkInventory() expects an order argument and returns a promise. 
If there are enough items in stock to fill the order, the promise 
will resolve to an array. The first element in the resolved value 
array will be the same order and the second element will be the 
total cost of the order as a number. */

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};


/* processPayment() expects an array argument with the order as the 
first element and the purchase total as the second. This function 
returns a promise. If there is a large enough balance on the giftcard 
associated with the order, it will resolve to an array. The first 
element in the resolved value array will be the same order and 
the second element will be a tracking number. */

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


/* shipOrder() expects an array argument with the order as the first 
element and a tracking number as the second. It returns a promise,
which resolves to a string confirming the order has shipped. */

const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};





// APP.JS

const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


/* One common pattern we’ll see with asynchronous programming is multiple operations 
which depend on each other to execute or that must be executed in a certain order.

We take our dirty clothes and put them in the washing machine. If the clothes are 
cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the 
clothes are dry, then we can fold them and put them away. */

// chained .then statements
checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


/* Common mistakes
Mistake 1: Nesting promises instead of chaining them.
Mistake 2: Forgetting to return a promise


// example of both mistakes
checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });


// should be refactored to:
checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray)
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray)
  })
  .then((successMessage) => {
    console.log(successMessage);
});


// Tried to refactor this even more, the return could maybe be implied with straight arrow funcs:
checkInventory(order)
  .then((resolvedValueArray) => processPayment(resolvedValueArray))
  .then((resolvedValueArray) => shipOrder(resolvedValueArray))
  .then((successMessage) => console.log(successMessage))
  .catch((errorMessage) => console.log(errorMessage));
  
*/