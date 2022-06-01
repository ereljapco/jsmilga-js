# ES6+

## var, let, const

### var

✔️ declare
✔️ reassign
✔️ redeclare

### let

✔️ declare
✔️ reassign
❌ redeclare

### const

✔️ declare
❌ reassign
❌ redeclare

#### Note

`Const variable of object cannot be reassigned and redeclare, BUT its properties can be reassign.`

## scope

### var

#### function

- reassigning and redeclaring will affect the value within the function only and not the global value

#### block

- reassigning and redeclaring within a block `outside of a function` will affect global value
- reassigning within a block `within a function` will affect global value
- redeclaring within a block `within a function` will not affect global value

### let

#### function

- `reassigning` will affect the `global value`
- `redeclaring` will affect the value within the `function only`

#### block

- `reassigning` will affect `global value`
- cannot `redeclare` within a block

### const

#### function

- cannot `reassign` within a function
- `redeclaring` will only affect the value within the function

#### block

- cannot `reasssign` within a block
- `redeclaring` will only affect the value within the block

## rest operator

- Passing an array directly as an argument that uses a rest operator in its parameter will produce an array within an array

```js
const score = [88, 77, 95, 91];

const computeAverageScore = (name, ...scores) => {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  average = total / scores.length;

  console.log(`${name}'s average score is ${average}`);
};

computeAverageScore(person.firstName, score);

// console.log(scores)
// [[88, 77, 95, 91]]
```

- The array should also use a rest operator as an argument

```js
const score = [88, 77, 95, 91];

const computeAverageScore = (name, ...scores) => {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  average = total / scores.length;

  console.log(`${name}'s average score is ${average}`);
};

computeAverageScore(person.firstName, ...score);

// console.log(scores)
// [88, 77, 95, 91]
```
