/* The power of Handlebars lies in its reusability 
and extensibility. Handlebars expressions allow us 
to accomplish this.

Inside a script, Handlebar expressions are wrapped 
with double braces, {{ }}. The content inside the 
curly braces serves as a placeholder.

For instance, if we use the following script:
<script id="foo" type="text/x-handlebars-template">
  <p>{{bar}}</p>
</script>

And our JavaScript file looks like:

const source = document.getElementById('foo').innerHTML;
const template = Handlebars.compile(source);
const context = {
  bar: 'Text of the paragraph element'
};
const compiledHtml = template(context);

After running our code, the expression, {{bar}} is replaced 
with the value of context.bar in our JavaScript file. In 
other words, compiledHtml will contain a string of '<p> 
Text of the paragraph element </p>'. */

// relevant html
<script id="greet" type="text/x-handlebars-template">
    {{greeting}}
</script>

<div id="hello"></div>


//js
const source = document.getElementById('greet').innerHTML;
const template = Handlebars.compile(source);

const context = {
  greeting: 'Hello World!'
};

const compiledHtml = template(context);
const fill = document.getElementById('hello');
fill.innerHTML = compiledHtml;