const homeBills = [3000, 500, 2299];
const babyNeeds = [5800, 1600, 4000];

function calculateTotal(arr) {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

console.log(calculateTotal(homeBills));
console.log(calculateTotal(babyNeeds));