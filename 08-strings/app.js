// create function fullName
// accept two parameters "firstName" and "lastName"
function fullName(firstName, lastName) {
  // add "firstName" and "lastName" (concat) and return result in uppercase
  const name = firstName + lastName;
  return name.toUpperCase();
}

// invoke fullName and pass some values
fullName('Juana', 'dela Cruz');