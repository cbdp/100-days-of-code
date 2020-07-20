/* Update state with this.setState
A component can also change its own state by calling the 
function this.setState(). this.setState() takes two arguments: 
an object that will update the component’s state, and a callback.
You basically never need the callback.

Notice that <Example /> has a state of:

    {
      mood:   'great',
      hungry: false
    }

Now, let’s say that <Example /> were to call:

    this.setState({ hungry: true });

After that call, here is what <Example />‘s state would be:

    {
      mood:   'great',
      hungry: true
    }

The mood part of the state remains unaffected. this.setState() 
takes an object, and merges that object with the component’s 
current state. If there are properties in the current state that 
aren’t part of that object, then those properties remain how 
they were.

The most common way to call this.setState() is to call a custom 
function that 'wraps' a this.setState() call. */

import React from 'react';
import ReactDOM from 'react-dom'

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    // In React, when an event handler uses 'this, you need to add:
    // this.methodName = this.methodName.bind(this)
    // to your constructor function.
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const greenOrYellow = this.state.color == green ? yellow : green;
    this.setState({ color: greenOrYellow }); }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={ this.changeColor }>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

// Note: You can’t call this.setState() from inside the render function.

/* Here’s why: Any time that you call this.setState(), this.setState() 
AUTOMATICALLY calls .render() as soon as the state has changed!!!!!!!

Think of this.setState() as actually being two things: this.setState(), 
immediately followed by .render().

That is why you can’t call this.setState() from inside of the .render() 
method; this.setState() automatically calls .render(). If .render() calls 
this.setState(), then an infinite loop is created. */