
// const listItem = document.getElementsByTagName('li')
// console.log(listItem.length );

// const btnClick = document.getElementById('btn')
// console.log(btnClick);

// const listItem = document.querySelectorAll('li')
// listItem.forEach(function(item){
//     console.log(item);
// })
// const title = document.getElementById('text');
// title.innerHTML +=  '<i>www</i>'

// const n = document.getElementById('ol')

// n.forEach((name) => {
//     ol.innerHTML += `<li>${name}</li>`
// });

  
const link = document.querySelector('a')
console.log(link.getAttribute('href'));

link.setAttribute('href' , 'https://www.anime.com')
link.textContent = 'Anime'  

const title = document.querySelector('h2')
title.style.color='red'