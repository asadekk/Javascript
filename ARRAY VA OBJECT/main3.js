
const ismlar = ["asadbek" , "too", "luffy"];
const newI = [];

ismlar.forEach(function (ism) {
    let newism = ism.charAt().toUpperCase()+ism.slice(1)+"bek"
    newI.push(newism)
})
console.log(newI);
