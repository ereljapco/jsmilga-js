// class Relationship {
//   constructor(firstName, lastName, relationship) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.greet = function () {
//       return `Hello! I'm ${this.firstName} ${this.lastName}, and I'm ${baby.firstName}'s ${relationship}`;
//     };
//   }
// }

// const baby = {
//   firstName: 'Elyse',
//   lastName: 'Japco',
//   parents: {
//     mother: new Relationship('Erel', 'Japco', 'mother'),
//     father: new Relationship('Enzo', 'Japco', 'father'),
//   },
// };

// console.log(baby.parents.mother.greet());
// console.log(baby.parents.father.greet());

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bank = 'Unionbank';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(
    `You have deposited PHP ${amount}. You're new balance is ${this.balance}.\nThank you for banking with us at ${this.bank}!`
  );
};

const erel = new Account('Erel Japco', 500);

console.log(erel.bank);
console.log(erel.balance);

erel.deposit(1000);
erel.deposit(500);
erel.deposit(12);
erel.deposit(123);
