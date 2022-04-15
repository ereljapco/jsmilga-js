/*
Numbers

1. create "score1", "score2", "score3" variables and assign values (0-100)
2. calculate total score and average score, and assign them to the variables
3. log total score and average score
4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message
*/

const score1 = 43;
const score2 = 57;
const score3 = 86;

const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;

console.log(totalScore);
console.log(averageScore);

// create "plates" variable and assign 20
let plates = 20;
// create "people" variable and assign 7
const people = 7;

// calculate remaining plates and assign to the variable
plates -= people;

// add one to remaining plates
plates++;

// create message variable and display 'There are (your value goes here) plates available' - string concatenation
const message = 'There are ' + plates + ' plates available.';

// log message
console.log(message);