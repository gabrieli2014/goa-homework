function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.talk = function() {
        document.body.innerHTML += "Hello, my name is " + this.name + "<br>";
    }
}


let person1 = new Person("Gabriel", "Khelaia", 11);
person1.talk();

function Dog(name, surname, breed) {
    this.name = name;
    this.surname = surname;
    this.breed = breed;

    this.bark = function() {
        document.body.innerHTML += "Bark bark bark<br>";
    }
}

let dog1 = new Dog("Max", "Khelaia", "Husky");
dog1.bark();



let arr1 = [];
let arr2 = new Array();


let numbers = [1, 2, 3, 4];

let names = ["Gabriel", "Nika", "Luka"];


let numbers2 = new Array(1, 2, 3);


let emptyFive = new Array(5);


let arrFrom = Array.from([1, 2, 3]);


let range = Array.from({ length: 5 }, (_, i) => i);


let copy = [...numbers];


let letters = "Gabriel".split("");



const name = "Gabriel";
const surname = "Khelaia";

function printName() {
    console.log(name + " " + surname);
}

setInterval(printName, 5000);