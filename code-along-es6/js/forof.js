const fruits = ['mango', 'atis', 'guava', 'starapple'];
const longName = 'Juana Isabela Dela Cruz';

let shortName = '';

for (const letter of longName) {
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}

// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === 'atis') {
    continue;
  }

  console.log(fruit);
}
