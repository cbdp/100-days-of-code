// targeting tags and IDs
document.body.innerHTML = 'targets the entire body and replaces it with this txt'
document.querySelector('h1').innerHTML = 'Targets h1 elements';
document.getElementById('fourth').innerHTML = 'targets a specific ID'

// targeting CSS
document.body.style.backgroundColor = '#yellow'; // target css styles for body and change background-color
// or
let blueElement = document.querySelector('.blue');
blueElement.style.paddingLeft = '200px'; // target css styles for .blue and change padding-left


// create and append DOM elem
let newElement = document.createElement('li'); // create a new list element

newElement.id = 'the-ID'; // set id
newElement.innerHTML = 'The content of new list element'; // set content 

document.getElementById('where-to-place-it').appendChild(newElement); // append as last-child


// remove DOM elem
let x = document.getElementById('oaxaca');
document.getElementById('more-destinations').removeChild(x);


// Interactivity with onclick
let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.innerHTML = "Red Button"; 
}
element.onclick = turnButtonRed;
// or
function turnButtonRed (){
  element.onclick = function() { 
    element.style.backgroundColor = 'red';
    element.innerHTML = 'Red Button';
  }
}
