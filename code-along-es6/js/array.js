const example = ['one', 'two', 'three'];

// console.log(example);

const array = Array.of('four', true, 4);

// console.log(array);

const word = 'hello';

console.log(Array.from(word));

function countTotal() {
  let total = Array.from(arguments).reduce(
    (total, current) => (total += current),
    0
  );

  console.log(total);
}

countTotal(55, 45, 35);
