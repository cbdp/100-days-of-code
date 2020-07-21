/* Our programming pattern uses two React components: 
a stateful component, and a stateless component. 
“Stateful” describes any component that has a state 
property; “stateless” describes any component that does not.

In our pattern, a stateful component passes its state down 
to a stateless component. */



///// Stateless component: Child.js /////

import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is { this.props.name }</h1>;
  }
}



///// Stateful component: Parent.js /////

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Arthur' }
  }
  render() {
    return <Child name={ this.state.name } />;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));