/* compare with names in react-event-handler.jsx */

///// Button.js /////
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}


///// Talker.js /////
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 100; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/* Note: Names like onClick only create event listeners 
if they’re used on HTML-like JSX elements. Otherwise, 
they’re just ordinary prop names. In the above example,
the onClick from Button.js creates the event, whereas
the onClick in Talker is simply an attribute name. */