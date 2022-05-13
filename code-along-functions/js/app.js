function newAccount(name, initialBalance) {
  let balance = initialBalance;
  let prevBalance = balance;
  let inputAmount;
  let message;

  function showBalance() {
    if (prevBalance < balance) {
      message = `You have deposited ${inputAmount} into your account.`;
      prevBalance = balance;
    } else if (prevBalance > balance) {
      message = `You have withdrawn ${inputAmount} from your account.`;
      prevBalance = balance;
    } else {
      message = `Hello, ${name}!`;
    }

    console.log(`${message} You're current balance is PHP ${balance}.`);
    return;
  }

  function deposit(amount) {
    prevBalance = balance;
    inputAmount = amount;
    balance += amount;

    showBalance();
  }

  function withdraw(amount) {
    prevBalance = balance;
    inputAmount = amount;

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

erel.deposit(500);
erel.withdraw(300);
erel.showBalance();
erel.deposit(1500);
erel.showBalance();
