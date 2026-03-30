

let cinema = [
    { name: 'Titanik', year: 2008, rating: 9 },
    { name: 'Avatar', year: 1998, rating: 7 },
    { name: 'Forsaj', year: 2020, rating: 4 },
    { name: 'Avengares', year: 2012, rating: 6 },
]

// const mapMovie = cinema.map((movie) => {
//     return { name: movie.name, year: movie.year, rating: movie.rating + 1 }
// })
// console.log(mapMovie);
// console.log(cinema);


// let movie = [];
// cinema.forEach((cinemaa)=>{
//     if(cinemaa.year > 2010){
//         movie.push(cinemaa)
//     }
// })
// console.log(movie);

// const movieNew = cinema.filter(movie => movie.rating >= 6)
// console.log(movieNew);


// let numbers = [1,23,4,5]

// let oshirish = numbers.map((num)=>{
//     return num ** 2
// })
// console.log(oshirish);


// let numbers = ['d','s','a'];

// const newNumber = numbers.sort()
// console.log(newNumber);

const retingN = cinema.sort((a,b)=>{
    return a.reting - b.reting
})
console.log(retingN);
