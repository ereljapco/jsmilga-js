const word = 'picture';
const letters = [...word];

// console.log(word);
// console.log(letters);

const boys = ['Gary', 'Mr. Krabs', 'Squidward'];
const girls = ['Pearl', 'Sandy'];
const bestFriend = 'Patrick';

const friends = [bestFriend, ...boys, ...girls];
// console.log(friends);

friends[4] = 'Juana';
// console.log(friends);

// ----- OBJECTS

const person = {
  name: 'Erel',
  job: 'developer',
};

const newPerson = {
  ...person,
  province: 'Laguna',
  job: 'mid-level developer',
};

// console.log(person);
// console.log(newPerson);

const headings = document.querySelectorAll('h1');
const result = document.querySelector('#result');

const text = [...headings]
  .map((item) => `<span>${item.innerText}</span>`)
  .join('');

result.innerHTML = text;

/////////////////////////////////
const numbers = [13, 56, 2, 768, 27];

// console.log(Math.max(...numbers));

const juana = ['Juana', 'Dela Cruz'];

const sayHello = (firstName, lastName) => {
  console.log(`Hello, ${firstName} ${lastName}!`);
};

sayHello(...juana);
