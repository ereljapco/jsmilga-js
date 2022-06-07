const xhr = new XMLHttpRequest();
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  displaytext();
});

function displaytext() {
  xhr.open('GET', '../api/sample.txt');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const p = document.createElement('p');
      p.textContent = xhr.responseText;
      document.body.appendChild(p);
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
