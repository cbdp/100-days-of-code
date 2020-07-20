/* Every component’s props object has a property named children.
this.props.children will return everything in between a component’s 
opening and closing JSX tags.

So far, all components have been self-closing tags, such as <MyComponentClass />. 
But, write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> 
and </MyComponentClass>:        

// <BigButton>‘s this.props.children will equal the text, “I am a child of BigButton.”
<BigButton>I am a child of BigButton.</BigButton>


// <BigButton>‘s this.props.children will equal a <LilButton /> component.
<BigButton><LilButton /></BigButton>


// BigButton>‘s this.props.children would equal undefined.
<BigButton />
If a component has more than one child between its JSX tags, then 
this.props.children will return those children in an array. However, 
if a component has only one child, then this.props.children will return the 
single child, not wrapped in an array. */


///// List.js /////
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{ this.props.children }</ul>
      </div>
    );
  }
}


///// App.js /////
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);