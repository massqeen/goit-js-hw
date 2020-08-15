const ingredientsRef = document.getElementById('ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const ingredientsListItems = ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});
ingredientsRef.append(...ingredientsListItems);
