/* this.state
React components will often need dynamic information in order 
to render. For example, imagine a component that displays the 
score of a game. The score of the game might change over time, 
meaning that the score is dynamic. Our component will have to 
know the score, a piece of dynamic information, in order to 
render in a useful way.

There are two ways for a component to get dynamic information: 
- props
- state 

Unlike props, a component’s state is not passed in from the 
outside. A component decides its own state. To make a component 
have state, give the component a state property declared inside
of a constructor method:

constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}

Note: this.state should be equal to an object.

Besides props and state, every value used in a component should 
always stay exactly the same. */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}