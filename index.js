

var box = document.getElementById('box');
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;
console.log(`targetX: ${targetX}`)
console.log(`targetY: ${targetY}`)

function distance(x1, x2, y1, y2){
  var x = x1 - x2;
  var y = y1 - y2;
  x *= x;
  y *= y;
  return Math.sqrt(x + y);
}

var win = false;
function loc(e){
  if (win === false){
    // console.log(`mouseX: ${event.clientX}`)
    var xMouse = e.clientX;
    var yMouse = e.clientY;
    var d = distance(xMouse, targetX, yMouse, targetY);
    if (d <= 40){
      box.style.backgroundColor = "rgb(0,0,255)";
      win = true;
      // alert("You win! Refresh to play again")
    }
    else{
      box.style.backgroundColor = `rgb(0,${255-d},0)`;
    }
  }
}

// messing around with making buttons in js instead of html. Can create the button but need to work on the on click part
// function color(){
//   document.getElementById('box').style.backgroundColor = 'red'
// }
// b = document.createElement("BUTTON");
// b.innerHTML = "Click me";
// document.body.appendChild(b);
//
// b.addEventListener("onclick", color())

box.addEventListener("mousemove", loc)



// var mouseX = box.addEventListener("mousemove", locX);
// var mouseY = box.addEventListener("mousemove", locY);

// var d = distance(mouseX, targetX, mouseY, targetY)
// console.log(d)
// box.addEventListener()

// function background(){
//   box.style.backgroundColor = `rgb(0,${255-distance(mouseX, targetX, mouseY, targetY)},0)`
// }
// box.addEventListener("mousemove", background)

// box.style.backgroundColor = `rgb(0,${255-distance(mouseX, targetX, mouseY, targetY)},0)`
