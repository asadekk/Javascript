let ismI = document.getElementById("ism");
let telI = document.getElementById("tel");
let btn = document.getElementById("save")
let tbody = document.getElementById("tbody")
let users = []

function saveU(){
let user = {
    name:ismI.value,
    phone:telI.value
}
users.push(user)
tbody.innerHTML = ' ';
users.forEach((user) => {
let tr = document.createElement("tr")
let tdName = document.createElement("td")
tdName.innerText = user.name
let tdPhone = document.createElement("td")
tdPhone.innerText = user.phone

tr.append(tdName , tdPhone)
tbody.append(tr)
})
}

btn.addEventListener('click', saveU)