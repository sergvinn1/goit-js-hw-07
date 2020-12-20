const inputSpectrum = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSpectrum.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
