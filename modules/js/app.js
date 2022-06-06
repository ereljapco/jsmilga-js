const modulesContainer = document.querySelector('.modules__container');
const modulesDisplayBtn = document.querySelector('.modules__display-btn');

const people = [
  {
    name: 'Harry Potter',
    house: 'Gryffindor',
  },
  {
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
  },
];

modulesDisplayBtn.addEventListener('click', () => {
  modulesContainer.innerHTML = displayPeople();
});

function displayPeople() {
  const hogwarts = people
    .map((person) => {
      return `<p>${person.name} <strong>${person.house}</strong></p>`;
    })
    .join('');

  return hogwarts;
}
