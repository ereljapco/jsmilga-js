// create two objects "person1", "person2"
// setup name, age (15-25), status ('resident', 'tourist') keys
const person1 = {
  name: 'Jane Doe',
  age: 21,
  status: 'resident'
}

const person2 = {
  name: 'John Doe',
  age: 25,
  status: 'tourist'
}

// set if else condition where age must be bigger than 18 and status must be equal to 'resident'

function freeDinner(name, age, status) {
  if (age > 18 && status === 'resident') {
    console.log(`Hello, ${name}, you are qualified for free dinner!`)
  }
  else {
    console.log(`Sorry, ${name}, you are not qualified for free dinner.`)
  }
}

// test with both objects
freeDinner(person1.name, person1.age, person1.status);
freeDinner(person2.name, person2.age, person2.status);