// map - updatedStudents
// 1. add role: 'student' property to each object usign MAP method
// 2. assign to 'updatedStudents' variable and log

const updatedStudents = students.map(function(student) {
  student.role = 'student';
  return student;
});

console.log(updatedStudents);

// filter - highScores
// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function(student) {
  return student.score >= 80;
});

console.log(highScores);

// find - specificId
// 1. find specific is in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function(student) {
  return student.id === 4;
});

console.log(specificId);

// reduce - averageScore
// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore = students.reduce(function(totalScore, student) {
  return totalScore + student.score;
}, 0) / students.length;

console.log(averageScore);