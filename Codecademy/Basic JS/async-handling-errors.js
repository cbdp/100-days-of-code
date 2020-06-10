// LIBRARY.JS

/* When .catch() is used with a long promise chain, there is no indication 
of where in the chain the error was thrown. This can make debugging challenging.

With async...await, we use try...catch statements for error handling. 
By using this syntax, not only are we able to handle errors in the 
same way we do with synchronous code, but we can also catch both synchronous 
and asynchronous errors. This makes for easier debugging! */


//This function returns true 50% of the time.
let randomSuccess = () => {
 let num = Math.random();
 if (num < .5 ){
   return true;
 } else {
   return false;
 }
};

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
 return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Bean Souffle in the oven');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('Bean Souffle');
     } else {
       reject('Dinner is ruined!');
     }
   }, 1000);
 })
};

module.exports = cookBeanSouffle;


// APP.JS

const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try {
    let resolvedValue = await cookBeanSouffle();
    console.log(resolvedValue + ' is served!');
    console.log('Massive success!');
  }
  catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
};

hostDinnerParty();