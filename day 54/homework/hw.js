let now = new Date();
console.log(now.getMinutes());
console.log(now.getSeconds());

let p = document.createElement("p");
document.body.appendChild(p);

setInterval(function () {
    let current = new Date();
    console.log(current.getSeconds());
    p.textContent = current.toLocaleTimeString();
}, 1000);

setInterval(function () {
    let current = new Date();
    let minute = current.getMinutes();
    let second = current.getSeconds();
    console.log(minute + ":" + second);
}, 2000);