const button1 = document.getElementById('button-1'),
  goodEl = document.getElementById('good-1'),
  solution1 = document.querySelector('.solution-1');
let price;

button1.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(1);

  let good = goodEl.value;
  price = Math.round(Math.random() * 1000);
  solution1.textContent = `Выбран "${good}", цена за штуку ${price} кредитов.`;
});
