
let accounts = [
    { name: "Natnael Abay", acc_id: 1, amount: 4_000 },
    { name: "Kebede Chala", acc_id: 2, amount: 2_000 },

]

let findAccount = (id, accounts) => {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].acc_id == id) {
            return { account: accounts[i], isTrue: 1 }
        }
    }
    return { isTrue: 0 }
}

let deposit = (id, amount) => {
    let account = findAccount(id, accounts).accounts
    if (account.isTrue == 0)
        console.log("there is no account with the specified account number!")
    else {
        account.amount = parseInt(account.amount) + parseInt(amount)
        console.log(`you have successfully deposited ${amount} your current account balance is ${account.amount}`)
    }
}

let withdraw = (id, amount) => {
    let account = findAccount(id, accounts).account
    if (account.isTrue == 0) {
        console.log(`There is no Account with ${id} account number try again!!!`);
    } else {
        if (account.amount < amount) {
            console.log(`Your current account balance ${account.amount} is insufficient to withdraw the amount ------ ${amount} ------ 😥😥 `);
        } else if (amount > 1000) {
            console.log(`maximum withdraw limit please decrease the limit of money <= 100`);
        } else {
            account.amount = parseInt(account.amount) - parseInt(amount)
            console.log(`successfully withdrawn ------ ${amount} ETB ------ your current account balance is ---- ${account.amount} ----- 😊`);
        }
    }
}
let balance = (id) => {
    let account = findAccount(id, accounts).account
    if (account.isTrue == 0)
        console.log(`There is no Account with ${id} account number try again!!!`);
    else
        console.log(`Dear ${account.name} with account number ${account.acc_id} your account balance is ----- ${account.amount} ETB ----- thank you for your  service`)
}

let transfer = (id, to, amount) => {
    let account = findAccount(id, accounts).account
    let for_who = findAccount(to, accounts).account
    if (account.isTrue == 0 ) {
        console.log(`Dear customer the account number you inserted is not correct!!`);
        
    } else {
        if (account.amount < amount)
            console.log(`Your current account balance ------- ${account.amount} ETB ------- is insufficient to make ----- ${amount} ETB ----- transfer!!`);
        else {
            if (for_who.isTrue == 0)
                console.log(`Dear customer you have inserted an incorrect account number for your transfer please try again!!`);
            else {
                account.amount = parseInt(account.amount) - parseInt(amount)
                for_who.amount = parseInt(for_who.amount) + parseInt(amount)
                console.log(`Dear ${account.name} you have successfully transferred ------ ${amount} ETB ------  to ${for_who.name} 😊`)
            }
        }
    }
}

let register = (acc_id, amount, name) => {
    acc_id = parseInt(acc_id)
    accounts.push({
        name,
        amount,
        acc_id
    })
}

let print = (accounts) => {
    console.log("\n")
    console.table(accounts)
    console.log("\n")
}


(function () {
    print(accounts)
    let choice = prompt("register: 1 \n transfer: 2 \n balance: 3 \n withdraw:4 \n deposit: 5 \n anyKeyToQuit:😞")
    while (true) {

        if (choice == "1") {
            let id = prompt("acc no.")
            let amount = prompt("amount")
            let fullName = prompt("your full name?")
            register(id, parseInt(amount), fullName)
            print(accounts)
        }
        else if (choice == "2") {
            let id = prompt("acc no.")
            let to = prompt("to acc")
            let amount = prompt("amount")
            transfer(id, to, parseInt(amount))
            print(accounts)
        }
        else if (choice == "3") {
            let id = prompt("acc no.")
            balance(id)
            print(accounts)
        } else if (choice == "4") {
            let id = prompt("acc no.")
            let amount = prompt("amount")
            withdraw(id, amount)
            print(accounts)
        }
        else if (choice == "5") {
            let id = prompt("acc no.")
            let amount = prompt("amount")
            deposit(id, amount)
            print(accounts)
        } else {
            console.log()
            break

        }

        choice = prompt("register: 1 \n transfer: 2 \n balance: 3 \n withdraw:4 \n deposit: 5 \n anyKeyToQuit:😞")
    }
})()