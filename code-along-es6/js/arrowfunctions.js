// function sayHi() {
//   console.log('hello');
// }

// sayHi();

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// hello('Bob');

// function triple(value1, value2) {
//   return value1 * value2 * 3;
// }

//////////////// Arrow Basics
// const sayHi = () => console.log('hello');

// sayHi();

// const hello = (name) => console.log(`Hello, ${name}`);

// hello('Jane');

// const triple = (value1, value2) => value1 * value2 * 3;

// console.log(triple(2, 3));

// const object = () => ({ name: 'John', age: 25 });

// // console.log(object().name);

// const person = object();

// console.log(person.name);

// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number, index) => {
//   console.log(index);
//   return number > 2;
// });

// console.log(big);

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => console.log('You clicked me!'));

//////////////// Arrow arrow and this

const elyse = {
  firstName: 'Elyse',
  lastName: 'Japco',
  sayName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

elyse.sayName();
