class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm in grade ${this.grade}`;
  }
}

const student1 = new Student("Gabriel", 12, 6);
const student2 = new Student("Nika", 13, 7);

console.log(student1.introduce());
