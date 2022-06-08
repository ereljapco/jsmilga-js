const url = '../api/people.json';
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayText(data))
    .catch((err) => console.log(err));
});

function displayText(data) {
  const textContainer = document.createElement('div');

  const text = data
    .map((item) => {
      return `<p><strong>${item.name}</strong> from ${item.house}</p>`;
    })
    .join('');

  textContainer.innerHTML = text;
  document.body.appendChild(textContainer);
}
