import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

// note the lack of () after this.scream
  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
};

ReactDOM.render(<Button />, document.getElementById('app'));