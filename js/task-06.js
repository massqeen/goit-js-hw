const button6 = document.getElementById('button-6'),
  product = document.getElementById('product'),
  products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
  ],
  solution6 = document.querySelector('.solution-6');

const calculateTotalPrice = (allProduct, productName) => {
  for (const objItem of allProduct) {
    if (objItem.name === productName) {
      return objItem.price * objItem.quantity;
    }
  }
  return false;
};
const handleButtonClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(6);
  const result = calculateTotalPrice(products, product.value);

  if (result) {
    solution6.textContent = `Общая стоимость продукта "${product.value}" составляет ${result}.`;
  } else {
    solution6.textContent =
      'В исходном массиве нет объектов с таким продуктом!';
  }
};

button6.addEventListener('click', handleButtonClick);
