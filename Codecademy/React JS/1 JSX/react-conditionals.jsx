/* How can you write a conditional, if you can’t inject 
an if statement into JSX? Well, one option is to write an 
if statement, and not inject it into JSX.

// example
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
let img;

const coinToss = () => Math.random() < 0.5 ? 'heads' : 'tails';

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

coinToss() === 'heads' ? img = <img src={pics.kitty} /> : img = <img src={pics.doggy} />;

ReactDOM.render(
  img,
  document.getElementById('app')
);