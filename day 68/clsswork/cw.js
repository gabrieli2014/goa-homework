// var - ძველი გზაა ცვლადის შესაქმნელად.
// მისი მნიშვნელობა შეიძლება შეიცვალოს და scope ნაკლებად უსაფრთხოა.

// let - თანამედროვე გზაა ცვლადის შესაქმნელად.
// მისი მნიშვნელობა შეიძლება შეიცვალოს.

// const - თანამედროვე გზაა, მაგრამ მნიშვნელობა აღარ იცვლება.
// ანუ ერთხელ რაც მიენიჭება, იგივე დარჩება.

// 1) მომხმარებლისგან სახელის მიღება prompt-ით

let name = prompt("enter ur name:");

console.log(`ur name is ${name}`);


// Default parameters ნიშნავს, რომ ფუნქციის პარამეტრს
// წინასწარ შეგვიძლია მივანიჭოთ მნიშვნელობა.

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Gabrieli"); 
greet();




const people = {
    me: {
        name: "Gabrieli",
        age: 11,
        grade: 5,

        grow() {
            this.age++;
        },

        pass() {
            this.grade++;
        },

        changeName(newName) {
            this.name = newName;
        }
    },

    friend1: {
        name: "luka",
        age: 11,
        grade: 5,

        grow() {
            this.age++;
        },

        pass() {
            this.grade++;
        },

        changeName(newName) {
            this.name = newName;
        }
    },

    friend2: {
        name: "andia",
        age: 10,
        grade: 5,

        grow() {
            this.age++;
        },

        pass() {
            this.grade++;
        },

        changeName(newName) {
            this.name = newName;
        }
    },

    friend3: {
        name: "vata",
        age: 11,
        grade: 5,

        grow() {
            this.age++;
        },

        pass() {
            this.grade++;
        },

        changeName(newName) {
            this.name = newName;
        }
    }
};

people.me.grow(); 
people.me.pass(); 
people.me.changeName("Gabi"); 

console.log(people);