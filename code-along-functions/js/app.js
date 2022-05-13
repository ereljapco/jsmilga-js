function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hello, ${name}! You're current balance is PHP ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit };
}

const erel = newAccount('Erel', 3000);

erel.showBalance();
erel.deposit(500);
erel.deposit(7230);
