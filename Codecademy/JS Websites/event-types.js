/* Many events need user interaction with the DOM to fire. 
One user interaction event you’ve become familiar with is the 
click event. A click event fires when the user presses and 
releases a mouse button on an element in the DOM. 


In the rest of this lesson, you’ll explore more user interaction 
event types like the mouse and keyboard events. To explore 
more event types, check out the MDN Events Reference. */

// relevant html
<button id='color-button'>Pick a Color</button>
<button id='next-button'>Mystery Color</button>


// relevant css
#color-button{
  width: 350px;
  height: 100px;
  border: none;
  font-size: 24px;
  background-color: #141c3a;
  color: white;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5px;

}
#next-button{
  width: 350px;
  height: 100px;
  border: none;
  font-size: 24px;
  background-color: #141c3a;
  color: white;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
}


/// the all important js file:

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;