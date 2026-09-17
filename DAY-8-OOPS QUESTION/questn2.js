class BankAccount {

    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited", amount);
        console.log("New balance", this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdraw:", amount,  "New balance:", this.balance);
        } else {
            console.log("Insufficient funds");
        }
        console.log("********************");
    }

    getBalance() {
        return this.balance;
    }
}
let acc1 = new BankAccount(101, "Shivani", 5000);
let acc2 = new BankAccount(102, "Riya", 3000);

acc1.deposit(2000);
acc1.withdraw(1000);

console.log("Balance:", acc1.getBalance());

acc2.deposit(1000);
acc2.withdraw(5000);

console.log("Balance:", acc2.getBalance());