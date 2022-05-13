function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hello, ${name}! You're current balance is PHP ${balance}`);
  }
  return { showBalance: showBalance };
}

const erel = newAccount('Erel', 3000);

erel.showBalance();
