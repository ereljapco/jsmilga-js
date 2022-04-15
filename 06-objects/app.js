// create car object
// add make, model, year, colors (array), hybrid (boolean) keys
// add two methods (drive and stop)
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: '2022',
  colors: ['White', 'Pearl White', 'Black', 'Red'],
  hybrid: true,
  drive() {
    // setup log with random text
    console.log('drive');
  },
  stop() {
    // setup log with random text
    console.log('stop');
  }
}

// log make
console.log(car.make);