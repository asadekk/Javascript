

// setTimeout(()=>{
//     console.log('SALOM');
    
// }, 5000)

// let [olma,banan,nok] = ['olma','banan','nok'];


// console.log(olma,banan,nok);

// const h1 = document.querySelector('h1');
// const button = document.querySelector('button')

//  const click = button.addEventListener('click',(e)=>{
    
//  })

// const now = new Date();

// const data = now.getDate();
// const moth = now.getMonth();
// const years = now.getFullYear();
// const menut = now.getMinutes();
// console.log(data,moth,years,menut);


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


// const [a,s,...d]= [...ustun]
// console.log(ustun);
// console.log(a,s,d);



// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    
  })