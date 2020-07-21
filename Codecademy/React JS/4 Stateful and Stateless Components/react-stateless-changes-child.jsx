// Child Components Update Sibling Components
// "We were building worlds within worlds" - Elroy Patashnik


/* In lesson 1, you learned your first React programming pattern:
a stateful, parent component passes down a prop to a stateless, 
child component.

In lesson 2, you learned that lesson 1’s pattern is actually part of a 
larger pattern: A stateful, parent component passes down an event handler 
to a stateless, child component. The child component then uses that event 
handler to update its parent’s state.

Here, we will expand the pattern one last time. A child component updates its 
parent’s state, and the parent passes that state to a sibling component. */



// One Sibling to Display, Another to Change

/* Components should only have one job:

In the react-stateless-changes-state.jsx, Child.js had two jobs:
1 - Child displayed a name.
2 - Child offered a way to change that name.

Here, I'll to make like Solomon and divide Child in two: 
one component for displaying the name, and a different component for 
allowing a user to change the name. */


///// Sibling.js /////

import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    // 6. That stateless component class receives the state and displays it.
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}



///// Child.js /////

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  // 3. That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument.
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}> <!-- 4. The stateless component class uses this new function as an event handler: 
                                                When an event is detected, the parent’s state updates   -->
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}


///// Parent.js /////

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  // 1. A stateful component class defines a function that calls this.setState
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  /* 7. An instance of the stateful component class is rendered. One stateless 
        child component displays the state, and a different stateless child 
        component displays a way to change the state */
  render() {
    return (
      <div>
        <Child onChange={this.changeName} /> <!-- 2. The stateful component passes that function down to a stateless component. -->
        <Sibling name={this.state.name} /> <!-- 5. The stateful component class passes down its state, distinct from the ability to 
                                                   change its state, to a different stateless component. -->
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

/* The Pattern in full, refer to comments above to see the specific code 

- A stateful component class defines a function that calls this.setState. (Parent.js)
- The stateful component passes that function down to a stateless component. (Parent.js)
- That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js)
- The stateless component class uses this new function as an event handler. (Child.js). When an event is detected, the parent’s state updates. 
- The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js)
- That stateless component class receives the state and displays it. (Sibling.js)
- An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the state. (Parent.js)*/
