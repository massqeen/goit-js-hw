const approve = 'Заказ оформлен, с вами свяжется менеджер',
  button2 = document.getElementById('button-2'),
  decline = 'На складе недостаточно товара!',
  goodEl = document.getElementById('good-2'),
  solution2 = document.querySelector('.solution-2');
let total;

button2.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(2);

  let goodQuantity = Number(goodEl.value);

  total = Math.round(Math.random() * 1000);
  solution2.textContent = total >= goodQuantity ? approve : decline;
});
