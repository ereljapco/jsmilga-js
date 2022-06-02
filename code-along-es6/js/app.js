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

/////////////////////////////////////
// ----- every and some
const grades = [65, 88, 93, 55, 90];
// const allGoodGrades = grades.every((grade) => grade >= 65);
const someGoodGrades = grades.some((grade) => grade >= 65);

// console.log(someGoodGrades);

/////////////////////////////////////
// ----- for in
const person = {
  name: 'Harry',
  year: 'Sophomore',
  house: 'Gryffindor',
};

// for (const property in person) {
//   console.log(`${property}: ${person[property]}`);
// }

////////////////////////////////////
// ----- Object.keys, Object.values, Object.entries
const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personProperties = Object.entries(person);

// console.log(personKeys);
// console.log(personValues);
// console.log(personProperties);

// for (const [key, value] of personProperties) {
//   // const [key, value] = property;

//   console.log(`${key}: ${value}`);
// }

////////////////////////////////////
// ----- new Set()
const students = [
  {
    name: 'Harry',
    house: 'Gryffindor',
  },
  {
    name: 'Hermione',
    house: 'Gryffindor',
  },
  {
    name: 'Cho',
    house: 'Ravenclaw',
  },
  {
    name: 'Malfoy',
    house: 'Slytherin',
  },
];

const houses = [
  'Hufflepuff',
  ...new Set(students.map((student) => student.house)),
];

console.log(houses);
