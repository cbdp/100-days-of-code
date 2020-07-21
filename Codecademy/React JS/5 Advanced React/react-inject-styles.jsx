/* One problem with inlining all styles is that it becomes obnoxious 
if you want to use more than just a few styles. An alternative that’s 
often nicer is to store a style object in a variable, and then inject 
that variable into JSX. */

/* Defining a variable named style in the top-level scope would be an 
extremely bad idea in many JavaScript environments! In React, however, 
it’s totally fine. Remember that every file is invisible to every other 
file, except for what you choose to expose via module.exports. You could 
have 100 different files, all with global variables named style, and 
there could be no conflicts. */

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);