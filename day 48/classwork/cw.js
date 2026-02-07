
let age = Number(prompt("შეიყვანე შენი ასაკი"));


if (age >= 12 && age < 18) {
    console.log("ბილეთის ფასი არის 10 ლარი");
} else if (age >= 18 && age <= 65) {
    console.log("ბილეთის ფასი არის 20 ლარი");
} else {
    console.log("ბილეთის ფასი არის 15 ლარი");
}
