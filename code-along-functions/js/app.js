function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hello, ${name}! You're current balance is PHP ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(
        `Sorry, ${name}. You don't have enough balance to withdraw PHP ${amount}.`
      );
      return;
    }

    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const erel = newAccount('Erel', 3000);

erel.showBalance();
erel.deposit(500);
erel.deposit(7230);
erel.withdraw(13000.12);
erel.withdraw(500.5);
erel.withdraw(700);
