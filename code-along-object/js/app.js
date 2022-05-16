class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Unionbank';
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Hello, ${this.name}! \n\nYou have deposited PHP ${amount}. You're new balance is ${this.balance}.\nThank you for banking with us at ${this.bank}!`
    );
  }
}

const erel = new Account('Erel Japco', 500);
const enzo = new Account('Enzo Japco', 1000);

erel.deposit(1000);
enzo.deposit(100);
