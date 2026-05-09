const p1 = document.getElementById("p1");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  p1.textContent = "txt changed";
});

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "blue";
});

const inp = document.getElementById("inp");

inp.addEventListener("keyup", function () {
  console.log(inp.value);
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("dblclick", function () {
  alert("Double Click!");
});

const p2 = document.getElementById("p2");

p2.addEventListener("mouseout", function () {
  p2.style.color = "red";
});