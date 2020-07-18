/* import React from 'react' creates a JavaScript object. 
This object contains properties that are needed to make 
React work, such as React.createElement() and React.Component. */
import React from 'react';

/* import ReactDOM from 'react-dom' creates another JavaScript 
object. This object contains methods that help React interact 
with the DOM, such as ReactDOM.render(). */
import ReactDOM from 'react-dom';


// Every component must come from a component class.

/* A component class is like a factory that creates components. 
If you have a component class, then you can use that class 
to produce as many components as you want.
To create your own component class, you must subclass 
React.Component. You can do this by using the syntax 
class YourComponentNameGoesHere extends React.Component {}. */
class MyComponentClass extends React.Component {
    
/* There is only one property that you have to include in your 
instructions: a render method. A render method is a property 
whose name is render, and whose value is a function. A render 
method must contain a return statement. Usually, this return 
statement returns a JSX expression. */
  render() {
    return <h1>Hello world</h1>;
  }
};


/* All components have a .render method, so they can be called 
as is */
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

