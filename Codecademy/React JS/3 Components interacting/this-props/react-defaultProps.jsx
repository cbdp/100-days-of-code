/* If a component expects to receive a prop, but none is passed,
then the component display will be blank. Instead of this, you
can give your component class a prop named defaultProps */

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {
  text: 'I am a button'
};

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);