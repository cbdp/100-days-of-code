// LIBRARY.JS

/* This is the shopForBeans function. It uses a setTimeout() function 
to simulate a time-consuming asynchronous action. The function 
returns a promise with a resolved value of a string representing 
a type of bean. It settles on a random beanType from the 
beanTypes array using Math.random(). */

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`2. I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
  
module.exports = shopForBeans



// APP.JS

const shopForBeans = require('./library.js');

function getBeansMissingAsyncAwait() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

// getBeansMissingAsyncAwait();
/* returns:
1. Heading to the store to buy beans...                     
3. Great! I'm making [object Promise] beans for dinner tonig
ht!                                                         
2. I bought kidney beans because they were on sale. */

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

/* Some very simple examples:
async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
*/