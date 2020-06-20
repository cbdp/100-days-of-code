/* JavaScript interprets registered events as event objects 
with properties and methods. When you create an event handler 
function on a specific event, you create a property of the 
event object.

An event handler function is registered as a property 
attached to the DOM element being interacted with, or the 
event target. 

Event handlers can also be registered as an HTML element 
attribute, but you should always avoid inline JavaScript 
code in HTML files! */

// relevant HTML
<body>
  <section id='container'>
    <p id='info'>JavaScript is the programming language of the web. You can use it to add dynamic behavior and store information.
  </p>
  <p id='more-info'>JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.
  </p>  
    <button id='read-more'>Read More</button>
  </section>
  <script  src="main.js"></script>


// relevant css
}
#read-more{
  display: block;
  cursor: pointer;
}
#info, #more-info{
  display: block;
}
#more-info{
  display: none;
}


// main.js
let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

readMore.onclick = () => {
  moreInfo.style.display = 'block';
};