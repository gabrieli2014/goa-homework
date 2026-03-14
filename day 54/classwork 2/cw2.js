




let p = document.getElementById("timer");
let seconds = 10;

p.textContent = "Remaining time: " + seconds + " seconds";

let interval = setInterval(function() {
    seconds--;

    if (seconds > 0) {
        p.textContent = "Remaining time: " + seconds + " seconds";
    } else {
        clearInterval(interval);
        p.textContent = "Time is up!";

        let now = new Date();
        console.log(
            "Countdown finished at: " +
            now.getHours() + ":" +
            now.getMinutes() + ":" +
            now.getSeconds()
        );
    }

}, 1000);
