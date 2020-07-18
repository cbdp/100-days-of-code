/* You are likely to see this inside of the body of a 
component class declaration. Example: */

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}

/* Here, this refers to an instance of IceCreamGuy. 
The less simple answer is that this refers to the 
object on which this‘s enclosing method, in this 
case .render(), is called. It is almost inevitable 
that this object will be an instance of IceCreamGuy, 
but technically it could be something else.

Let’s assume that this refers to an instance of your 
component class. IceCreamGuy has two methods: 
.food and .render(). 
Since this will evaluate to an instance of IceCreamGuy, 
this.food will evaluate to a call of IceCreamGuy‘s 
.food method. This method will, in turn, evaluate to 
the string “ice cream.”

Why don’t you need parentheses after this.food? 
Shouldn’t it be this.food()?

You don’t need those parentheses because .food is a 
getter method. You can tell this from the get in the 
above class declaration body. */


// Another example:
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property getter method goes here:
  get name() {
    return 'bird';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));