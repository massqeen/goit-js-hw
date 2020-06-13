const approve = 'Заказ оформлен, с вами свяжется менеджер',
  button2 = document.getElementById('button-2'),
  decline = 'На складе недостаточно товара!',
  goodEl = document.getElementById('good-2'),
  solution2 = document.querySelector('.solution-2');
let total;

button2.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(2);

  if (Number.isNaN(Number(goodEl.value)) || Number(goodEl.value) <= 0) {
    alert('Пожалуйста, введите число больше 0!');
  } else if (Number.isInteger(Number(goodEl.value))) {
    let goodQuantity = Number(goodEl.value);
    total = Math.round(Math.random() * 1000);
    solution2.textContent = total >= goodQuantity ? approve : decline;
  } else {
    alert('Нужно ввести целое число, пожалуйста, повторите ввод!');
  }
});
