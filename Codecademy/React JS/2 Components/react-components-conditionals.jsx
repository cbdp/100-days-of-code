import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class with ternary op as conditional starts here:
class TonightsPlan extends React.Component {
    render() {
        let plans = fiftyFifty ? `Tonight I'm going out WOOO` : `Tonight I'm going to bed WOOO`;
        return <h1>{plans}</h1>;
    }
};

ReactDOM.render( <TonightsPlan /> , document.getElementById('app'));