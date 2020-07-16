import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

//  access variables while inside of a JSX expression

ReactDOM.render(
  <h1>{theBestString}</h1>, 
  document.getElementById('app')
);