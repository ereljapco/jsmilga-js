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

// console.log(job, otherInfo);

// ----- FUNCTION
const score = [88, 77, 95, 91];

const computeAverageScore = (name, ...scores) => {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  average = total / scores.length;

  console.log(`${name}'s average score is ${average}`);
};

// computeAverageScore(person.firstName, 88, 77, 95, 91);
computeAverageScore(person.firstName, ...score);
