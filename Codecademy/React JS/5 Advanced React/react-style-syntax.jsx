/* In regular JavaScript, style names are written in hyphenated-lowercase, 
but in React, those same names are instead written in camelCase.
Example: */

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: '100px',
  fontSize: '50px'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);


/* In regular JS, style values are almost always strings. Even if a style 
value is numeric, you usually have to write it as a string so that you 
can specify a unit. For example, you have to write "450px" or "20%".

In React, if you write a style value as a number; the "px" is assumed.
Thus, the above can be refactored as: */

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

// You'll still need 'these' if you want to use values like em, etc


/* Alternatively, you could create a styles.js document and export it: */

///// style.js /////
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://codecademy-content.s3.amazonaws.com/programs/react/images/welcome-to-my-homepage.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};

///// Attentiongrabber.js /////
import React from 'react';
import { styles } from './styles'

const h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

export class AttentionGrabber extends React.Component {
	render() {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
}

///// Home.js /////
import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles';

const divStyle = {
  background: styles.background,
  height:     '100%' 
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
	<Home />, 
	document.getElementById('app')
);