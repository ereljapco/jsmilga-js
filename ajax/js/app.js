const url = '../api/people.json';
const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayText(data);
  } catch (error) {
    console.log(error);
  }
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
