// Array() — Konstruktor
// Yangi bo'sh yoki belgilangan uzunlikdagi massiv yaratadi

// const n1 = new Array();
// console.log(n1);

// const n2 = new Array(10);
// console.log(n2.length);

// const n3 = new Array(1,23,4,5)
// console.log(n3);


// Array.from() — Iterable'dan massiv yaratish
// String, Set, Map va boshqa iterable ob'ektlardan massiv yaratadi


// const n1 = Array.from('ASTA')
// console.log(n1);

// const n2 = Array.from(new Set([1,2,2,3,4,5,4]))
// console.log(n2);

// const n3 = Array.from({length:100}, (v,i) => i*2);
// console.log(n3);


// Array.of() — Elementlardan massiv
// Berilgan argumentlardan massiv yaratadi. Array() dan farqi: Array.of(7) = [7], Array(7) = 7 uzunlikli
// bo'sh massiv.

// const n1 = Array.of(16);
// console.log(n1);

// const n2 = Array.of(1,2,4)
// console.log(n2);

// const n3 = Array.of('a','b','c')
// console.log(n3);


// Array.isArray() — Massiv tekshirish
// Berilgan qiymat massiv ekanligini tekshiradi, true/false qaytaradi

// Array.isArray([1, 2, 3]); // true
// Array.isArray('salom'); // false
// Array.isArray({a: 1}); // false
// Array.isArray(new Array()); // true

// const n1 = Array.isArray([1,2,3,4,5])
// console.log(n1);

// const n2 = Array.isArray('salom'); 
// console.log(n2);


//  Qo'shish va O'chirish Metodlari


// push() — Oxiriga qo'shish
// Massiv oxiriga bir yoki bir nechta element qo'shadi. Yangi uzunlikni qaytaradi.

// let meva = ['nok','olma','olcha']
// meva.push('shaptoli')
// meva.push('uzum','orik')
// console.log(meva);

// pop() — Oxiridan o'chirish
// Massivning oxirgi elementini olib tashlaydi va shu elementni qaytaradi

    // let meva = ['nok','olma','olcha']
    // meva.pop();
    // console.log(meva);

//shift() — Boshidan o'chirish
//Massivning birinchi elementini olib tashlaydi va qaytaradi
    
    // let meva = ['nok','olma','olcha']
    // meva.shift()
    // console.log(meva);
    
//unshift() — Boshiga qo'shish
//Massiv boshiga bir yoki bir nechta element qo'shadi

// let meva = ['nok','olma','olcha']
// meva.unshift('xurmo')
// console.log(meva);

//splice() — O'chirish / Qo'shish / Almashtirish
//Massivni o'zgartirishning eng kuchli metodi. O'chirish, qo'shish yoki almashtirish uchun ishlatiladi.4

// const arr = [1, 2, 3, 4, 5];
// // O'chirish: splice(index, nechta)
// arr.splice(3,1); // [2, 3] qaytaradi
// console.log(arr); // [1, 4, 5]
// // Qo'shish: splice(index, 0, ...elements)
// arr.splice(1, 0, 10, 20,40);
// console.log(arr); // [1, 10, 20, 4, 5]
// // Almashtirish: splice(index, nechta, ...yangi)
// arr.splice(0, 1, 99);
// console.log(arr); // [99, 10, 20, 4, 5]

//  Qidirish Metodlari

//indexOf() — Indeksni topish
//Elementning birinchi uchraydigan indeksini qaytaradi. Topilmasa -1.

// const arr = [2,5,3,4,3,5,2]
// const arrr = arr.indexOf(49)
// console.log(arrr);

//lastIndexOf() — Oxirgi indeksni topish
//Elementning oxirgi uchraydigan indeksini qaytaradi

//includes() — Mavjudligini tekshirish
//Element massivda bor-yo'qligini true/false bilan qaytaradi

// const arr = [2,5,3,4,3,5,2]
// const m = arr.includes(2)
// console.log(m);


// find() — Shartga mos elementni topish
// Shartga mos birinchi elementni qaytaradi. Topilmasa undefined.

// const users = [
// {id: 1, name: 'Ali', yosh: 25},
// {id: 2, name: 'Vali', yosh: 30},
// {id: 3, name: 'Hasan', yosh: 22},
// ];
// const user = users.find(u => u.yosh < 28);
// console.log(user)


// findIndex() — Shartga mos indeksni topish
// Shartga mos birinchi elementning indeksini qaytaradi. Topilmasa -1


// const arr = [5, 12, 8, 130, 44];
// const arrM = arr.findIndex(x => x > 40); 
// console.log(arrM);

//  Iteratsiya Metodlar

//ForEach()-— Har bir elementga amal bajarish
//Har bir element uchun callback funksiyani chaqiradi. Hech narsa qaytarmaydi (undefined).

// const arr = ['olma', 'banan', 'nok'];
// const count = arr.forEach((elemnet,index,array)=>{
// console.log(index,elemnet,array);

// })

//map() — Yangi massiv yaratish
//Har bir element uchun funksiya bajarib, natijalardan yangi massiv qaytaradi. Asl massiv o'zgarmaydi

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const sum = arr.map( n => n * 2);
// console.log(sum);

// const users = [{name:'Asta'},{name:'Luffy'},{name:"Kirito"},{name:'Asadbek'}]
// const m = users.map(n => n.name.toLocaleUpperCase())
// console.log(m);

// filter() — Filtrlash
// Shartga mos elementlardan yangi massiv yaratadi

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const count = numbers.filter(n => n % 2 === 0)
// console.log(count);

// const users = [{name:'Asta',age:15},{name:'Luffy',age:17},{name:"Kirito",age:18},{name:'Asadbek',age:16}];
// const ageU = users.filter(n => n.age >= 18)
// console.log(ageU);

//reduce() — Bitta qiymatga kamaytirish
//Massivni bitta qiymatga (son, string, ob'ekt) kamaytiradi. Eng kuchli iteratsiya metodlaridan biri


// const numbers = [ 1,2,3,4,5];
// // Yig'indisi
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum); 

// const product = numbers.reduce((acc, cur) => acc * cur, 1);
// console.log(product);

// const arr = ['a', 'b', 'c'];
// const obj = arr.reduce((acc, cur, i) => {
// acc[i] = cur;
// return acc;
// }, {});console.log(obj);


// reduceRight() — O'ngdan chapga reduce
// reduce() ning o'ngdan chapga ishlaydigan versiyasi


// const m = [[1,2],[3,4],[4,5]]
// const n = m.reduceRight((elm,index)=>(elm.concat(index)),[])
// console.log(n);

// every() — Hammasi shartga mosmi?
// Barcha elementlar shartga mos bo'lsa true, aks holda false qaytaradi

//  const numbers = [ 2, 4, 6, 8];
//  const n = numbers.every(n => n % 2 === 0)
//  console.log(n);
 
// some() — Kamida bittasi shartga mosmi?
// Kamida bitta element shartga mos bo'lsa true qaytaradi

//  const numbers = [ 1,2,3,4,5];
//  const n = numbers.some(n => n % 2 === 0)
//  console.log(n);
 



//  Tartiblash Metodlari ------>


//sort() — Tartiblash
//Massivni o'z joyida tartiblaydi (asl massivni o'zgartiradi). Default holda elementlarni string sifatida
//solishtiradi.


// const meva = ['d,','a,','b','c']
// meva.sort()
// console.log(meva);

// const numbers = [ 6,3,4,2,5,7,99,4];
// numbers.sort((a,b) => b - a)
// console.log(numbers);

// console.log(meva);


// reverse() — Teskari tartib
// Massiv elementlari tartibini teskarisiga o'zgartiradi (asl massivni o'zgartiradi)

// const arr = [1, 2, 3, 4, 5];
// arr.reverse()
// console.log(arr);

// toSorted() — Yangi tartiblangan massiv (ES2023)
// sort() ga o'xshash, lekin asl massivni o'zgartirmaydi — yangi massiv qaytaradi

// const meva = ['d,','a,','b','c']
// const mevaa = meva.toSorted()
// console.log(mevaa)
// console.log(meva);
// ;


// toReversed() — Yangi teskari massiv (ES2023)
// reverse() ga o'xshash, lekin asl massivni o'zgartirmaydi

// const arr = [1, 2, 3, 4, 5];
// const a = arr.toReversed()
// console.log(a);
// console.log(arr);




//  Kesish va Birlashtirish Metodlari

// slice() — Kesib olish
// Massivning bir qismini yangi massiv sifatida qaytaradi. Asl massiv o'zgarmaydi

// const arr = [1, 2, 3, 4, 5];
// const m = arr.slice(1,4)
// console.log(m);

// concat() — Birlashtirish
// Ikki yoki undan ko'p massivlarni birlashtiradi, yangi massiv qaytaradi

// const user = [
// {id: 1, name: 'Ali', yosh: 25},
// {id: 2, name: 'Vali', yosh: 30},
// {id: 3, name: 'Hasan', yosh: 22},
// ];
//  const users = [{name:'Asta',age:15},{name:'Luffy',age:17},{name:"Kirito",age:18},{name:'Asadbek',age:16}];
// const save = user.concat(users)
// console.log(save);

    // flat() — Ichki massivlarni yoyish
    // Ichma-ich massivlarni berilgan chuqurlikka ko'ra tekislashtiradi.

// const arr = [1, [2, 3], [4, [5, 6]]];
// const n = arr.flat(2)
// console.log(n);


// flatMap() — map + flat
// Har bir elementga map() bajarib, natijani 1 daraja tekislashtiradi.

// const m = [1,2,3]
// const n = m.flatMap(n => [n,n * 2])
// console.log(n);


// join() — Massivni stringga aylantirish

const arr = ['Ali', 'Vali', 'Hasan'];
const name = arr.join(' ')
console.log(name);

