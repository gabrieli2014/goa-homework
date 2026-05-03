        let button = document.getElementById("btn");

        button.addEventListener("click", function() {
            document.body.style.backgroundColor = "blue";
        });

        let btn2 = document.getElementById("btn2");

        btn2.addEventListener("dblclick", function() {
            document.getElementById("text").textContent = "Double Click completed";
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "r") {
                document.body.style.backgroundColor = "red";
            }

            if (event.key === "g") {
                document.body.style.backgroundColor = "green";
            }
        });