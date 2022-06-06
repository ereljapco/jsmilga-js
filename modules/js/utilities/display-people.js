function displayPeople(people) {
  const hogwarts = people
    .map((person) => {
      return `<p>${person.name} <strong>${person.house}</strong></p>`;
    })
    .join('');

  return hogwarts;
}

export default displayPeople;
