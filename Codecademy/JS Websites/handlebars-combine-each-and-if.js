/* You’ve mostly worked with individual expressions, however, 
you have the ability to combine expressions! In this exercise, 
you will combine the {{if}} block and the {{each}} block together 
in a single <script>! */

// relevant html
    <script src="handlebars.min.js"></script>
    <script id="languagesTemp" type="text/x-handlebars-template">
			{{#each languages}}
      	<div class="card">
          {{#if this.modern}}
        	<p>I should learn {{this.name}}.</p>
          {{else}}
          <p>When I have time, I'll learn {{this.name}}</p>
          {{/if}}
        </div>
      {{/each}}
    </script>
        
        
        
// js
const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML',
      modern: true,
    },
    {
      name:'CSS',
      modern: true,
    }, 
    {
      name: 'JavaScript',
      modern: true,
    },
    {
      name: 'COBOL',
      modern: false,
    }
  ]
};

const compiledHtml = template(context);
const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;

        