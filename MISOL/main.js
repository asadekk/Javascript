

    let users = []

    

    let step = true
    while(step){

        let action1 = prompt (" 1.User qo'shish \n 2.O'chirish \n 3.Yangilash \n 0.Chiqish")
        

    if( action1 === "1"){

        let ism = prompt ("Ism --->")
        let yosh = prompt ("Yosh --->")
        let tel = prompt ("Telfon raqam --->")
        let parol = prompt ("PASSWORD")


        let user = {
            name:ism,
            age:yosh,
            phone:tel,
            password:parol
        }
        users.push(user)
    }else if(action1 === "2"){
        let str = "";
        users.forEach((user,index) => {
            str += index + 1 + " " + user.name + "\n"
        })
        let deletUsera = prompt(str)
        delete users[deletUsera - 1]
    }else if(action1 === "3"){
         let str = "";
        users.forEach((user,index) => {
            str += index + 1 + " " + user.name + "\n"
        })
        let yangiUser = prompt(str)

            let ism = prompt ("Ism --->")
            let yosh = prompt ("Yosh --->")
            let tel = prompt ("Telfon raqam --->")
            let parol = prompt ("PASSWORD")

            users[yangiUser-1].name = ism;
            users[yangiUser-1].age = yosh;
            users[yangiUser-1].phone = parol;
            users[yangiUser-1].password = parol;
        }else{
        step = false
    }

    }
    console.log(users);
