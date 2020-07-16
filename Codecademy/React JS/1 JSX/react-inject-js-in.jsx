// Inject regular JavaScript into JSX expressions

import React from 'react';
import ReactDOM from 'react-dom';

/* The curly braces themselves won’t be treated as JSX nor as 
JavaScript. They are markers that signal the beginning and 
end of a JavaScript injection into JSX, similar to the 
quotation marks that signal the boundaries of a string. */

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      { Math.PI.toFixed(20) }
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);