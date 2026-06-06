
function checkInput() {
    let input = document.getElementById("name").value;

    if (input === "") {
        alert("field is empty!");
    }
}


function checkEmail() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Email should have @!");
    }
}


function checkPassword() {
    let password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!");
    }
}


function checkPasswords() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
        alert("password is not correct");
    }
}


function checkAge() {
    let age = document.getElementById("age").value;

    if (age < 18) {
        alert("should be older than 18!");
    }
}