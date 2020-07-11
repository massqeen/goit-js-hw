const button5 = document.getElementById('button-5'),
  solution5 = document.querySelector('.solution-5'),
  spam = document.getElementById('spam');

const checkForSpam = () => {
  const array = spam.value.toLowerCase().split(' ');
  const wordsToCheck = ['spam', 'sale', 'спам', 'распродажа'];
  for (const word of wordsToCheck) {
    if (array.includes(word)) {
      return true;
    }
  }
  return false;
};

button5.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);

  solution5.textContent = checkForSpam()
    ? 'Обнаружен спам!'
    : 'Ура, спама нет!';
});
// alt checking with regexp
// const regExp = /spam|sale|спам|распродажа/;
// console.log(regExp.test(spam.value.toLowerCase());
