// html

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <section id='container'>
    <ul>
        <li id='list-item-one'>The mouse must pass over to increase the box width</li>
        <li id='list-item-two'>Release the mouse button to change the color</li>
        <li id='list-item-three'>The mouse must leave the box to change the text</li>
        <li id='list-item-four'>Click the mouse to make the fifth box appear</li>
        <li id='list-item-five'>You found me!</li>
        <button id='reset-button'>Reset</button>
    </ul>
  </section>
  
  <script  src="main.js"></script>
</body>
</html>

// css

body{
  margin: 0;
  padding: 0;
  background: green;
  font-family: 'Nunito';
}
#container{
  background: #efd9ca;
  width: 100%;
  height: 100vh;
  margin: 0;
  float: left;
}
li, #list-item-one, #list-item-two , #list-item-three, #list-item-four, #list-item-five{
  width: 400px;
  height: 17px;
  list-style: none;
  background-color: #141c3a;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  padding: 17px 0px;
  color: #efd9ca;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Nunito';
}
#list-item-five{
  display: none;
}
#reset-button{
  width: 400px;
  height: 50px;
  background: #fd4d3c;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  padding: 17px 0px;
  color: #141c3a;
  font-weight: bold;
  display: block;
  cursor: pointer;
  font-family: 'Nunito';
}

// js

// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write code for the first list item
itemOne.onmouseover = () => itemOne.style.width = '425px';

// Write code for the second list item
itemTwo.onmouseup = () => itemTwo.style.backgroundColor = 'red';

// Write code for the third list item
itemThree.onmouseout = () => itemThree.innerHTML = 'The mouse has left the element.';

// Write code for the fourth list item
itemFour.onmousedown = () => itemFive.style.display = 'block';
