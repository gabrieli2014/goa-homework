

const arr = [1, 2, 3];
const copy = [...arr];




const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2];




const person = {
    name: "Gabriel",
    age: 12
};

const person2 = { ...person };




function numbers(...nums) {
    console.log(nums);
}

numbers(1, 2, 3, 4, 5);



function info(name, age, city) {
    console.log(name, age, city);
}

const data = ["Gabriel", 12, "Kutaisi"];

info(...data);