// LIBRARY.JS

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };



// APP.JS

const { checkInventory } = require('./library.js');

const orderOne = [['sunglasses', 1], ['bags', 2]];
const orderTwo = [['sunglasses', 1], ['bags', 2], ['horns', 3]];

// onFulfilled
const handleSuccess = value => console.log(value);
// onRejected
const handleFailure = value => console.log(value);



checkInventory(orderOne).then(handleSuccess, handleFailure); 
// returns: Thank you. Your order was successful.

checkInventory(orderTwo).then(handleSuccess, handleFailure); 
// returns: `We're sorry. Your order could not be completed because some items are sold out.

// alternatively, a cleaner way is with .catch, which only handles onRejected.
// it's not slower or faster, it's simply easier to read:
checkInventory(orderOne).then(handleSuccess).catch(handleFailure);
// returns: Thank you. Your order was successful.
