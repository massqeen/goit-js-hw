const button5 = document.getElementById('button-5'),
  solution5 = document.querySelector('.solution-5'),
  spam = document.getElementById('spam');

button5.addEventListener('click', (event) => {
  event.preventDefault();

  Tinycon.setBubble(5);

  const checkForSpam = () => {
    const array = spam.value.toLowerCase().split(' ');
    return array.includes('spam') || array.includes('sale');
  };

  if (checkForSpam()) {
    solution5.textContent = 'Обнаружен спам!';
  } else {
    solution5.textContent = 'Ура, спама нет!';
  }
});
