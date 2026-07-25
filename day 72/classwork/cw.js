// 0) Rest გამოიყენება ფუნქციაში იმისთვის, რომ რამდენიმე გადაცემული არგუმენტი ერთ მასივში შევაგროვოთ.

function showNumbers(...numbers) {
  console.log(numbers);
}



function sum(...nums) {
  let result = 0;

  for (let num of nums) {
    result += num;
  }

  console.log("sum", result);
}

sum(10, 20, 30);      
sum(5, 15, 25, 35);   



// Spread გამოიყენება მასივის ან ობიექტის ელემენტების/თვისებების გასაშლელად.მისი საშუალებით შეგვიძლია მასივების გაერთიანება, ობიექტების კოპირება ან ახალი ელემენტების დამატება.





const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers); 



const person = {
  name: "Gabriel",
  age: 12
};

const newPerson = {
  ...person,
  city: "qvaloni"
};

console.log(newPerson);

function Dog(name, age) {
  this.name = name;
  this.age = age;

  this.bark = function () {
    console.log("bark");
  };
}

const dog1 = new Dog("Max", 3);
dog1.bark();


function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;

  this.grow = function () {
    this.age += 2;
  };
}

const person1 = new Person("Gabriel", "Khelaia", 12);
person1.grow();
console.log(person1.age);
