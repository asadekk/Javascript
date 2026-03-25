// // Data types

// let name1 = "Zoro";
// let age = 21;
// let twocatana = false;
// let hous = null;
// let grilfrend = undefined;

// console.log(typeof name1);
// console.log(typeof age);
// console.log(typeof twocatana);
// console.log(typeof hous);
// console.log(typeof grilfrend);

// // ES6

// console.log(`My name is ${name1} age ${age} years old.I'm samuray`);

// console.log(name1.toUpperCase()); // katta qiladi
// console.log(name1.toLowerCase()); // kichkina qiladi

// console.log(name1.split("")); // harflar orasidan joy ochadi

// // Array


// let car = ["Mers", "Toyota", "BMW"];


// car.push("Tesla") // oxirga qoshadi
// car.unshift("Tesla") // boshiga qoshadi
// car.pop() //ohiradan ochiradi

// console.log(car);

// // Object {}

// const person = {
//     Iname : "Isagi",
//     age: 18,
//     address:{
//         housnumber: 22,
//         street: "Alabasta"
//     }
// }

// console.log(person.Iname, person.address.street);

// const {address, address:{housnumber}} = person;
// console.log(address, housnumber);

// console.log(JSON.stringify(person)); //JSON.stringify objet arry stringga ozgartiradi


// const ustun = [
//     {
//         Ename:"Tanjiro",
//         Eage: 16,
//         ustun:false,
//     },
//        {
//         Ename:"Zenutsu",
//         Eage: 16,
//         ustun:false,
//     },
//        {
//         Ename:"Tanjiro",
//         Eage: 16,
//         ustun:false,
//     },
//        {
//         Ename:"Tanjiro",
//         Eage: 16,
//         ustun:false,
//     },
// ]

// console.log(ustun.length);

// // For loop

// // for(i=0; i<=ustun.length; i++){
// //     console.log(i);
// //     console.log(ustun[i].Ename);
    
// // }

// // Else if

// let y = null;
// let x = false;
 
// if (x === y) {
//     console.log("TRUE");
    
// }else{
//     console.log("FALSE");
    
// }

// // AND -> &&    ikklasi ham  TRUE = TRUE bolishi kerak
// // OR -> ||    iktasiadan biri  TRUE = FALSE bolsa ishalydi

// let socer = 56;

// if(socer >= 90){
//     console.log("A");
    
// }else if(socer < 90 && socer >= 80 ){
//     console.log("B");
    
// }else if(socer < 80 && socer >= 70 ){
//     console.log("C");
    
// }else if(socer < 70 && socer >= 60 ){
//     console.log("D");
    
// }else{
//     console.log("CHich vording");
    
// }

// let coin = 70;

// let money =  coin > 80 ? "BOR" : "YOQ";
// console.log(money);

// //Switch case

// function greet(time) {
//     switch (time) {
//         case "Tong":
//                 console.log("ertlab");
//                  break;
//         case "Abet":
//             console.log("Abet");
//                  break;
//         case "kecki":
//             console.log("kechki ovaqat");
//                 break
//     }
// }
// greet("kechki");

// //

// let students = [
//     {
//         Iname: "Luffy",
//         age:19,
//         king:true
//     },
//     {
//         Iname: "Low",
//         age:21,
//         king:true
//     },
//     {
//         Iname: "Nami",
//         age:19,
//         king:false,
//     }
// ]

// // filter -> kerakliylarni chiqaradi
// // map -> aytilganlarni chiqaradi

// const king = students.filter(students=> {
//     return students.king === false;
// }).map(s =>{
//    return s.Iname
// })
// console.log(king);
// console.log(students);

// const ismLar = ['Asad','Anavr',"Asata"]

// for (let i = 0; i < ismLar.length; i++) {
//   let resalt = ismLar[i] + 'bek';
//   console.log(resalt);
// }

// let davlat = prompt('Viloyat nomini kiriting ')

// if ( davlat == "Olmaliq") {
//     alert(`${davlat} 100 000 ming aholi joylashgan `)
// }else if(davlat == "Andijon"){
//     alert(`${davlat} 300 000 ming aholi yashaydi`)
// }else if (davlat == "Navoiy") {
//     alert(`${davlat} 1 000 000 kishi yashaydi`)
// }else{
//     alert("Viloyat nomi xato kiritilgan")
// }

