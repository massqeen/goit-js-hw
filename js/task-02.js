const button2 = document.getElementById('button-2'),
  phrase = document.getElementById('phrase'),
  solution2 = document.querySelector('.solution-2');

button2.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(2);

  const calculateEngravingPrice = () => {
    const pricePerWord = Math.round(Math.random() * 1000);
    const engravingPrice = pricePerWord * phrase.value.split(' ').length;
    return `Цена за 1 слово: ${pricePerWord} грн, итоговая сумма к оплате: ${engravingPrice} грн. Спасибо за заказ!`;
  };
  solution2.textContent = calculateEngravingPrice();
});
