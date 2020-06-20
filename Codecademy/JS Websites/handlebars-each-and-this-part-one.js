/* Another helper that Handlebars offers is the {{each}} block 
which allows you to iterate through an array. Just like the 
{{if}} block, there is an opening {{#each}} expression and 
closing {{/each}} expression. Inside the {{each}} block, {{this}} 
acts as a placeholder for the element in the iteration. */

// relevant html
<script id="eachHelper" type="text/x-handlebars-template">
{{#each newArray}}
<div class="block">{{this}}</div>
{{/each}}    
</script>
  

// js
const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

const compiledHtml = template(context);
const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;

/* this creates a <div class=block> x </div> for each elem
in the newArray array */