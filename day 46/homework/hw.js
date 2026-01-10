document.getElementById("colorBtn").addEventListener("click", function () {
  document.getElementById("text1").style.color = "red";
});


document.getElementById("bgBtn").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "green";
});


document.getElementById("text2").addEventListener("click", function () {
  this.style.fontSize = "30px";
});


document.getElementById("image").addEventListener("click", function () {
  this.style.width = "300px";
});


document.getElementById("borderDiv").addEventListener("click", function () {
  if (this.style.border) {
    this.style.border = "";
  } else {
    this.style.border = "3px solid black";
  }
});

