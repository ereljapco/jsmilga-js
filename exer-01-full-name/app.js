const names = ['Percy', 'George', 'Fred', 'Ron', 'Ginny'];
const lastName = 'Weasley';
let fullNames = [];

for (let i = 0; i < names.length; i++) {
  fullNames.push(`${names[i]} ${lastName}`);
}

console.log(fullNames);