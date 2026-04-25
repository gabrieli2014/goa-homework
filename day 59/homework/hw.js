
document.querySelectorAll("div").forEach(el => {
  el.style.position = "relative";
});


let pos0 = 0;
function moveBox() {
  pos0 += 50;
  if (pos0 >= 500) pos0 = 0;
  document.getElementById("box0").style.left = pos0 + "px";
}


let visible = true;
setInterval(() => {
  let el = document.getElementById("box1");
  el.style.display = visible ? "none" : "block";
  visible = !visible;
}, 500);


let p1 = 0, p2 = 0, p3 = 0;

setInterval(() => {
  p1 += 5;
  document.getElementById("box2a").style.left = p1 + "px";
}, 100);

setInterval(() => {
  p2 += 3;
  document.getElementById("box2b").style.left = p2 + "px";
}, 100);

setInterval(() => {
  p3 += 1;
  document.getElementById("box2c").style.left = p3 + "px";
}, 100);

let size = 10;
let growInterval;

function startGrowing() {
  clearInterval(growInterval);
  growInterval = setInterval(() => {
    size += 5;
    if (size >= 60) size = 10;
    document.getElementById("growText").style.fontSize = size + "px";
  }, 1000);
}


let pos4 = 0;
let speed = 100;
let moveInterval;

function startMove() {
  clearInterval(moveInterval);
  moveInterval = setInterval(() => {
    pos4 += 5;
    document.getElementById("box4").style.left = pos4 + "px";
  }, speed);
}

function speedUp() {
  if (speed > 20) speed -= 20;
  startMove();
}

function slowDown() {
  speed += 20;
  startMove();
}

startMove();