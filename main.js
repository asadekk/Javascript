// Data types

let name1 = "Zoro";
let age = 21;
let twocatana = false;
let hous = null;
let grilfrend = undefined;

console.log(typeof name1);
console.log(typeof age);
console.log(typeof twocatana);
console.log(typeof hous);
console.log(typeof grilfrend);

// ES6

console.log(`My name is ${name1} age ${age} years old.I'm samuray`);

console.log(name1.toUpperCase()); // katta qiladi
console.log(name1.toLowerCase()); // kichkina qiladi

console.log(name1.split("")); // harflar orasidan joy ochadi

// Array


let car = ["Mers", "Toyota", "BMW"];


car.push("Tesla") // oxirga qoshadi
car.unshift("Tesla") // boshiga qoshadi
car.pop() //ohiradan ochiradi

console.log(car);

// Object {}

const person = {
    Iname : "Isagi",
    age: 18,
    address:{
        housnumber: 22,
        street: "Alabasta"
    }
}

console.log(person.Iname, person.address.street);

const {address, address:{housnumber}} = person;
console.log(address, housnumber);

console.log(JSON.stringify(person));


const ustun = [
    {
        Ename:"Tanjiro",
        Eage: 16,
        ustun:false,
    },
       {
        Ename:"Tanjiro",
        Eage: 16,
        ustun:false,
    },
       {
        Ename:"Tanjiro",
        Eage: 16,
        ustun:false,
    },
       {
        Ename:"Tanjiro",
        Eage: 16,
        ustun:false,
    },
]

console.log(ustun.length);
