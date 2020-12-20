const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const greet = event => {
  output.textContent =
    input.value === '' ? 'незнакомец' : event.currentTarget.value;
};

input.addEventListener('input', greet);
