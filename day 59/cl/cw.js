const box3 = document.getElementById("box3");
box3.style.width = "50px";
box3.style.height = "50px";
box3.style.backgroundColor = "green";
box3.style.position = "relative";
box3.style.top = "0px";

let topPos = 0;

setInterval(() => {
  topPos += 10;
  if (topPos >= 500) topPos = 0;
  box3.style.top = topPos + "px";
}, 1000);

const container = document.getElementById("progressContainer");
container.style.width = "300px";
container.style.height = "30px";
container.style.border = "1px solid black";

const bar = document.getElementById("progressBar");
bar.style.height = "100%";
bar.style.width = "0%";
bar.style.backgroundColor = "orange";

let progress = 0;

setInterval(() => {
  progress += 5;
  if (progress > 100) progress = 0;
  bar.style.width = progress + "%";
}, 100);