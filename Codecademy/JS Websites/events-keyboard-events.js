// relevant html
    <div id='float-circle'></div> 
    <div id='platform'></div>
    <div id='floor'></div>


// relevant css
button{
  width: 150px;
  height: 40px;
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 18px;
  color: white;
  background: #141c3a;
}
#float-circle{
  width: 100px;
  height: 100px;
  background: #fd4d3f;
  border-radius: 100px;
  bottom: 50px;
  left: 50%;
  position: absolute;
}
#floor{
  width: 100%;
  height: 30px;
  background: #6df0c2;
  bottom: 0;
  position: absolute;
}
#platform{
  width: 100px;
  height: 50px;
  background: #efd9ca;
  bottom: 0;
  position: absolute;
  left: 50%;
  right: 50%;
}


// js 
let ball = document.getElementById('float-circle');

const up = () => ball.style.bottom = '250px';
const down = () => ball.style.bottom = '50px';

document.onkeydown = up;
document.onkeyup = down;