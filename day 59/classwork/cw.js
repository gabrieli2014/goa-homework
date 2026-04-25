const box = document.getElementById("box");
box.style.width = "50px";
box.style.height = "50px";
box.style.backgroundColor = "red";
box.style.position = "relative";
box.style.left = "0px";

const box2 = document.getElementById("box2");
box2.style.width = "50px";
box2.style.height = "50px";
box2.style.backgroundColor = "blue";

let interval = null;
let position = 0;
let isMoving = false;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (!isMoving) {
    interval = setInterval(() => {
      position += 5;
      box.style.left = position + "px";
    }, 50);
    isMoving = true;
  } else {
    clearInterval(interval);
    isMoving = false;
  }
});

let size = 50;
let growing = true;

setInterval(() => {
  if (growing) {
    size += 10;
    if (size >= 200) growing = false;
  } else {
    size -= 10;
    if (size <= 50) growing = true;
  }

  box2.style.width = size + "px";
  box2.style.height = size + "px";
}, 1000);