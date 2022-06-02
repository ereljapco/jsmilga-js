// ----- find and findIndex

const people = [
  { id: 1, name: 'Harry' },
  { id: 2, name: 'Ron' },
  { id: 3, name: 'Hermione' },
];

const hermione = people.findIndex((person) => person.name === 'Hermione');

console.log(hermione);

const newPeople = people.slice(0, hermione);

console.log(newPeople);
