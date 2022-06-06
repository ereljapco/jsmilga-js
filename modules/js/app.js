import { people } from './utilities/people.js';
import displayPeople from './utilities/display-people.js';

const modulesContainer = document.querySelector('.modules__container');
const modulesDisplayBtn = document.querySelector('.modules__display-btn');

modulesDisplayBtn.addEventListener('click', () => {
  modulesContainer.innerHTML = displayPeople(people);
});
