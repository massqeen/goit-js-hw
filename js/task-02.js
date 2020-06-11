let total,
  good = document.querySelector('#good-2');
const button2 = document.querySelector('#button-2'),
  solution2 = document.querySelector('.solution-2'),
  approve = 'Заказ оформлен, с вами свяжется менеджер',
  decline = 'На складе недостаточно товара!';

button2.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(2);

  let goodQuantity = Number(good.value);
  total = Math.round(Math.random() * 1000);
  solution2.textContent = total >= goodQuantity ? approve : decline;
});