class Account {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }       

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
let account1 = new Account(123456, "shivani", 1000);
account1.deposit(500);
console.log("Balance after deposit: " + account1.getBalance());
account1.withdraw(200);
console.log("Balance after withdrawal: " + account1.getBalance());