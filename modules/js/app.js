import { people } from './utilities/people.js';
import getElement from './utilities/get-element.js';
import displayPeople from './utilities/display-people.js';

const modulesContainer = getElement('.modules__container');
const modulesDisplayBtn = getElement('.modules__display-btn');

modulesDisplayBtn.addEventListener('click', () => {
  modulesContainer.innerHTML = displayPeople(people);
});
