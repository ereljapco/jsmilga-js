// ----- find and findIndex

const people = [
  { id: 1, name: 'Harry' },
  { id: 2, name: 'Ron' },
  { id: 3, name: 'Hermione' },
];

const hermione = people.findIndex((person) => person.name === 'Hermione');

// console.log(hermione);

const newPeople = people.slice(0, hermione);

// console.log(newPeople);

// ----- every

const grades = [65, 88, 93, 55, 90];
const allGoodGrades = grades.every((grade) => grade >= 65);

console.log(allGoodGrades);
