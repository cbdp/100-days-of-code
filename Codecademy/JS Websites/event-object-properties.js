/* JavaScript stores events as event objects with their 
related data and functionality as properties and methods. 
There are pre-determined properties associated with event 
objects. You can call these properties to see information 
about the event, for example:

- the .target property to access the element that triggered the event.
- the .type property to access the name of the event.
- the .timeStamp property to access the number of milliseconds that 
  passed since the document loaded and the event was triggered. */

let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = 'You share the puppy in ' 
  + event.timeStamp + ' ms.';
}

share.onclick = sharePhoto;