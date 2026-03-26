
// // Function declorotion =>

//     function sum(){
//         console.log("HELLO fucking");
//     }
//     sum()

// // Function expresson =>

//     let DxD = function () {
//         console.log('hello sword art onilen');
//     }
//     DxD()

    // let hello = function (name,qora = 'suv') {
    //     console.log(`Salom ${name} ${qora}`);
    // }
    // hello('Asta',"qora klaver")

// // Arrow function =>

//     const klaver = () => {
//         console.log("Asta vs Yuri");
//     }
//     klaver()

// const cal = function (radius) {
//     const n = 3.14 * radius ** 2;
//     return n
// }
// let a = cal(5)

//  let bill = function (product, tax) {
//     let tatol = 0;
//     for (let i = 0; i <= product.length; i++) {
//         tatol += product[i] + product[i] * tax
//     }
//     return tatol
//  }
//  let c = bill([10,13,45],0.2)
//  console.log(c);
 

// function calcAge(sana,ism) {
//     const kun = 2026 - sana
//     console.log(`Hurmatliy ${ism} sizning yoshingiz ${kun} da`);
//     return kun
// }
// calcAge(2010,"Asadbek")

let myFun = (sum) => {
    let n = 50;
    sum(n)
}
myFun(function (value) {
    console.log(value);
    
})