/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/


let registerValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const register = document.querySelector('span');

const increment = () => {
  registerValue += 1;
  register.textContent = registerValue;
};
const decrement = () => {
  registerValue -= 1;
  register.textContent = registerValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
