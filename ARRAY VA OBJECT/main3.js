
// const ismlar = ["asadbek" , "too", "luffy"];
// const newI = [];

// ismlar.forEach(function (ism) {
//     let newism = ism.charAt().toUpperCase()+ism.slice(1)+"bek"
//     newI.push(newism)
// })
// console.log(newI);

// let array = [1,23,4,45,6,4]

// array.forEach(function (n) {
//     console.log(n);
    
// })

let person = {
    name : "Asadbek",
    age : 16,
    bestAnime : "ONE PIES",
    mail : "zoro@gmail.com",
    phone : "Redmi 5",
    endAnime : function () {
        console.log('Siz hali onepisni tugatmadingiz')
        
    },
    Anime : function () {
        console.log('Elita clasroom')
        
    }
}

console.log(this);

person.Anime()
person.endAnime()
console.log(person);
console.log(person.name);
console.log(person["bestAnime"]);


let colors = ["red", "blue", "green"];

let randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);