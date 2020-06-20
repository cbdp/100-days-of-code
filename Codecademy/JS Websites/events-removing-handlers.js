/* The .removeEventListener() method is used to reverse the 
.addEventListener() method. This method stops the code from 
“listening” for an event to fire when it no longer needs to. 
.removeEventListener also passes two arguments:

- The event type as a string
- The event handler function

Example:
eventTarget.removeEventListener('click', eventHandlerFunction);

Because this method unregisters event handlers, it needs to 
identify which function to remove from the event. The event 
handler function passed to the .removeEventListener() method MUST 
be the same function of the corresponding .addEventListener(). */

let door = document.getElementById('door');
let unlock = document.getElementById('unlock');
let lock = document.getElementById('lock');
let sign = document.getElementById('sign');
let cafeImage = document.getElementById('image');

cafeImage.hidden = true;

let openDoor = function() {
  door.hidden = true;
  cafeImage.hidden = false;
}

let closeDoor = function(){
  door.hidden = false;
  cafeImage.hidden = true;
}

unlock.onclick = function() {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
}

lock.onclick = function() {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
}

unlock.addEventListener('click', function(){
  door.addEventListener('click', openDoor);
  cafeImage.addEventListener('click', closeDoor);
})

//// removeEventListener ///
lock.addEventListener('click', function() {
  door.removeEventListener('click', openDoor)
})
