   let users = [];
   let step1 = true;
   while (step1) {
    let action1 = prompt(" 1.Users qoshish \n 2.Delete users \n 3.Users yangilash\n 0.Exit")
    if( action1 === "1"){
        let ism = prompt("Ism ...")
        let parol = prompt("Parol...")
        let user = {
            name:ism,
            password:parol,
        }
        users.push(user)
    }else if(action1 === "2"){
        let str = " ";
        users.forEach((user , index) =>{
            str += index + 1 + ' ' + user.name + '\n'
        })
        let deleteUser = prompt(str)
        delete users [ deleteUser - 1]
    }else if(action1 === "3"){
        let str = " ";
        users.forEach((user , index) =>{
            str += index + 1 + ' ' + user.name + '\n'
        })
        let yangilashUser = prompt(str)

        let ism = prompt("Ism ...")
        let parol = prompt("Parol...")

        users [yangilashUser - 1].name = ism;
        users [yangilashUser - 1].password = parol
    }else{
        step1 = false
    }
   }
   console.log(users);
   

