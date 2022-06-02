// ----- find

const people = [
  { id: 1, name: 'Harry' },
  { id: 2, name: 'Ron' },
  { id: 3, name: 'Hermione' },
];

const hermione = people.find((person) => person.name === 'Hermione');

console.log(hermione.name);
