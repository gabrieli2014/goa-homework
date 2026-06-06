// var - ძველი ტიპის ცვლადია
// let - ახალი ცვლადია და უსაფრთხოა
// const - მნიშვნელობა აღარ იცვლება


let name=prompt("enter ur name")

console.log(`your name is ${name}`)


const Dog = {
  name: "charlie",
  age: 1,

  bark: function () {
    console.log(`${this.name} grrrr`);
  }
};

Dog.bark();
// this ვიყენებთ ობიექტის საკუთარ მონაცემებთან მისასვლელად


const myClass = {
  className: "6 კლასი",
  students: ["გაბრიელი", "ირაკლი", "მარიამი", "ლუკა", "ანა"],

  showStudents: function () {
    for (let i = 0; i < this.students.length; i++) {
      console.log(this.students[i]);
    }
  }
};

myClass.showStudents();