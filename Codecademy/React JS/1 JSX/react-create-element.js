// You can write React code without using JSX at all
const greatestDivEverJSX = <div>i am div</div>;
// above can refactored as below
const greatestDivEver = React.createElement(
	'div',
  null,
  'i am div'
);

/* This is because: When a JSX element is compiled, 
the compiler transforms the JSX element into the method 
that you see above: React.createElement(). Every JSX 
element is secretly a call to React.createElement(). */