/* Using {{this}} also gives you access to the
properties of the element being iterated over. */

// relevant html
<script id="languagesTemp" type="text/x-handlebars-template">
{{#each languages}}
<div class="card"><p>I should learn {{this.name}}.</p></div>
{{/each}}
</script>
 
 
// js
const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
  ],
};

const compiledHtml = template(context);
const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
