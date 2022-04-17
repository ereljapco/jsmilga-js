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