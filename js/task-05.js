const button5 = document.getElementById('button-5'),
  products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
  ],
  property = document.getElementById('property'),
  solution5 = document.querySelector('.solution-5');

const getAllPropValues = (arr, prop) => {
  const allValues = [];
  for (const objItem of arr) {
    if (objItem[prop]) {
      allValues.push(objItem[prop]);
    }
  }
  return allValues;
};

button5.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  const result = getAllPropValues(products, property.value);

  if (!!result.length) {
    solution5.textContent = result.join(', ');
  } else {
    solution5.textContent =
      'В исходном массиве нет объектов с таким свойством!';
  }
});
