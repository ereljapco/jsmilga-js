// ----- ARRAYS
const fruits = ['mango', 'pineapple', 'atis', 'guava', 'starapple'];
const [first, second, ...otherFruits] = fruits;

// console.log(first, second, otherFruits);

// ----- OBJECTS
const person = {
  firstName: 'Erel',
  lastName: 'Japco',
  job: 'developer',
};
const { job, ...otherInfo } = person;
console.log(job, otherInfo);
