
let button = document.getElementById("btn");
let text = document.getElementById("text");

// =======================
// dblclick event
// =======================
button.addEventListener("dblclick", function() {
   
    text.textContent = "dbl click complited";
});

// =======================
// keydown event
// =======================
document.addEventListener("keydown", function(event) {
    // event.key გვიჩვენებს რომელი ღილაკი დააჭირა მომხმარებელმა
    console.log("დაჭერილი ღილაკი:", event.key);

    
    if (event.key === "r") {
        document.body.style.backgroundColor = "red";
    }

    
    if (event.key === "g") {
        document.body.style.backgroundColor = "green";
    }
});