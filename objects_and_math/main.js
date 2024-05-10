
class Account{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
        this.accountNumber = Math.random() * (1000 - 1) + 1
    }

    deposit = num => {
        this.balance += num
    }

    withdrawl = num => {
        (this.balance >= num) && (this.balance -= num)
    }

    addInterest = interestRate => {
        this.balance += this.balance * interestRate
    }

}

let adam = new Account("Adam Cifelli", 13000)
console.log(adam)

adam.deposit(450)
console.log(adam.balance)

adam.withdrawl(120)
console.log(adam.balance)

adam.withdrawl(15000)
console.log(adam.balance)

adam.addInterest(0.02)
console.log(adam.balance)
