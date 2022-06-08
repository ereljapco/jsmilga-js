const btn = document.querySelector('button');
const url = '../api/people.json';

btn.addEventListener('click', () => {
  displaytext(url);
});

function displaytext(url) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      const text = data
        .map((item) => {
          return `<p><strong>${item.name}</strong> from ${item.house}</p>`;
        })
        .join('');

      const textContainer = document.createElement('div');

      textContainer.innerHTML = text;
      document.body.appendChild(textContainer);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
