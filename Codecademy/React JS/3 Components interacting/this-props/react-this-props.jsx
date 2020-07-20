/* A component can render another component, but a component can 
also pass information to another component. Information that 
gets passed from one component to another is known as “props”

Every component has something called props. A component’s props 
is an object. It holds information about that component. To see 
a component’s props object, you use the expression: this.props.

You can pass information to a React component:
<MyComponent foo="bar" />

If you want to pass information that isn’t a string, then wrap 
that information in curly braces. To pass an array, do:
<Greeting myInfo={["top", "secret", "lol"]} />

You will often want a component to display the information that 
you pass. Make a component display passed-in information by:
1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class’s 
    render method’s return statement.

To access and display a passed-in prop, use something like this:
render() {
  return <h1>{this.props.firstName}</h1>;
}

The most common use of props is to pass information to a component, 
from a different component. We haven’t done that yet, but it’s very 
similar to what we’ve done already above.

Exercise:
Your mission is to pass a prop to a <Greeting /> component instance,
from an <App /> component instance. Note: If <App /> is going to pass 
a prop to <Greeting />, then it follows that <App /> is going to 
render <Greeting />. */


///// Greeting.js /////
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}


///// App.js /////
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="name" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);