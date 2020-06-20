// relevant html
<script id="ifHelper" type="text/x-handlebars-template">
{{#if opinion}}
<p>"The correct way to say 'GIF' is GIF!"</p>
{{/if}}
</script>  
     
 
// js
const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  opinion: true,
}

const compiledHtml = template(context);
const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;