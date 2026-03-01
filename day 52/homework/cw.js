


let counter = 0;

setInterval(function() {
    counter++;
    console.log("Counter:", counter);
}, 1000);



let colors = ["red", "blue", "green", "yellow", "purple"];
let colorIndex = 0;

setInterval(function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}, 2000);



let texts = ["Hello", "Hi", "Welcome", "Gabriel", "JavaScript"];
let textIndex = 0;

setInterval(function() {
    document.getElementById("title").textContent = texts[textIndex];
    textIndex++;

    if (textIndex >= texts.length) {
        textIndex = 0;
    }
}, 1000);



let size = 16;

setInterval(function() {
    size += 2;
    document.getElementById("paragraph").style.fontSize = size + "px";
}, 3000);



let width = 150;

setInterval(function() {
    width += 20;
    document.getElementById("myImage").style.width = width + "px";
}, 2000);
