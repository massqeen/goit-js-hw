let price,
  good = document.querySelector('#good-1');
const button1 = document.querySelector('#button-1'),
  solution1 = document.querySelector('.solution-1');

button1.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(1);

  let goodName = good.value;
  price = Math.round(Math.random() * 1000);
  solution1.textContent =
    `Выбран "${goodName}", цена за штуку ${price} кредитов.`;
});