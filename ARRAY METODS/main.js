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
