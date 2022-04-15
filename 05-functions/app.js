// create "calculateTotal" function
// add two parameters subTotal, tax
function calculateTotal(subTotal, tax) {
  // return sum of parameters
  return subTotal + tax;
}

// create 3 variables "order1", "order2", "order3"
// call calculateTotal, pass in some values and assign result to each order
const order1 = calculateTotal(110, 10);
const order2 = calculateTotal(45, 5);
const order3 = calculateTotal(259, 25);

// log all three orders
console.log('The total for order 1 is ' + order1);
console.log('The total for order 2 is ' + order2);
console.log('The total for order 3 is ' + order3);