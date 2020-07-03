const button5 = document.getElementById('button-5'),
  solution5 = document.querySelector('.solution-5'),
  spam = document.getElementById('spam');

button5.addEventListener('click', (event) => {
  event.preventDefault();

  Tinycon.setBubble(5);

  const checkForSpam = () => {
    const array = spam.value.toLowerCase().split(' ');
    const wordsToCheck = ['spam', 'sale', 'спам', 'распродажа'];
    for (const word of wordsToCheck) {
      if (array.includes(word)) {
        return true;
      }
    }
  };

  solution5.textContent = checkForSpam()
    ? 'Обнаружен спам!'
    : 'Ура, спама нет!';
});
