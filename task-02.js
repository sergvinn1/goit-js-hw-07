//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listForItems = document.querySelector(`#ingredients`);

const addListItems = array => {
  const listElement = array.map(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem;
  });
  listForItems.append(...listElement);
};

addListItems(ingredients);
