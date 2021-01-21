
let deposit = (id, amount) => {
    let account = localStorage.getItem(id)
    if (account == null) {
        localStorage.setItem(id,amount)
    } else {
        localStorage.setItem(id,parseInt(amount) + parseInt(account)) 
    }
}
let withdraw = (id, amount) => {
    let account = localStorage.getItem(id)
    if (account == null) {
        console.log("no user");
    } else {
        if (account < amount) {
            console.log("amount not enough");
        } else if(amount > 1000) {
            console.log("max amount reached ");
        }else {
            localStorage.setItem(id, parseInt(account) - parseInt(amount))
            console.log("successfull withdrawn " + amount);
        }
    }
}
let balance = (id) => {
    let account = localStorage.getItem(id)
    if (account == null) {
        console.log("no user");
    } else {
        console.log("account balance is " + account);
    }
}

let transfer = (id, to, amount) => {
    let account = localStorage.getItem(id)
    let for_who = localStorage.getItem(to)
    if (account < amount) {
        console.log("not enough money!");
    } else {
        if (to == null) {
            console.log("no user with that id");
        } else {
            localStorage.setItem(id, parseInt(account) - parseInt(amount))
            localStorage.setItem(to, parseInt(for_who) + parseInt(amount))
            console.log("transfered birr");
        }
    }
}


let register = (id, amount) => {
    localStorage.setItem(id, amount)
}


(function () {
    let choice = prompt("register: 1 transfer:2 balance:3 withdraw:4 deposit: 5")
    if (choice == "1") {
        let id = prompt("acc no.")
        let amount = prompt("ammount")
        register(id, parseInt(amount))
    }
    else if (choice == "2") {
        let id = prompt("acc no.")
        let to = prompt("to acc")
        let amount = prompt("ammount")
        transfer(id, to, parseInt(amount))
    }
    else if (choice == "3") {
        let id = prompt("acc no.")
        balance(id)
    } else if (choice == "4") {
        let id = prompt("acc no.")
        let amount = prompt("ammount")

        withdraw(id,amount)
    }
    else if (choice == "5") {
        let id = prompt("acc no.")
        let amount = prompt("ammount")

        deposit(id,amount)
    }
})()