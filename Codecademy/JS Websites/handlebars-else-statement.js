// relevant html
    <script src="handlebars.min.js"></script>
    <script id="ifHelper" type="text/x-handlebars-template">
      {{#if opinion}}
        <p>"The correct way to say GIF is GIF!"</p>
      {{else}}
        <p>There's no right way to say GIF!</p>
      {{/if}}
    </script> 

        
// js
const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

let context = {
  opinion: false,
};

const compiledHtml = template(context);
const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;
