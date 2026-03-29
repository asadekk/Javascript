
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

  
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));

// link.setAttribute('href' , 'https://www.anime.com')
// link.textContent = 'Anime'  

// const title = document.querySelector('h2')
// title.style.color='red'

// const button = document.querySelector('button');

// button.addEventListener('click', ()=> {
//     console.log("Todo list")
// })




// li.forEach((lim)=>{
//     lim.addEventListener('click', (e)=>{
//         // console.log('li ishladi');
//         // console.log(e);
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         // e.target.style.color = 'green'     
//         e.target.remove()   
//     })
// })

const main = document.querySelector('main')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    // main.innerHTML += '<div>Contir oynanazimi gomi 🔫</div>'
    const div = document.createElement('div')
    div.textContent = 'ontir oynanazimi🔫'
    main.prepend(div)
    
})

main.addEventListener('click', (e)=>{
    if(e.target.nodeName == 'DIV'){
        e.target.remove()
    }
    
}
)
// const li = document.querySelectorAll('div');
// li.forEach((item)=>{
//     item.addEventListener('click', (e)=>{
//         console.log("div");
//         e.stopPropagation()
        
//     })
// })
// main.addEventListener('click',()=>{
//     console.log("main");
    
// })