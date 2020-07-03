const answerDescription = document.querySelector('.answer-description'),
  answerWords = document.querySelector('.answer-words'),
  answerWordsLength = document.querySelector('.answer-words-length'),
  button3 = document.getElementById('button-3'),
  string = document.getElementById('string-3');

const findLongestWord = () => {
  const words = string.value.split(' ');
  let longestWord = '';
  const longestWords = [];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      longestWords.splice(0, 100, longestWord);
    }
    if (word.length === longestWord.length && word !== longestWord) {
      longestWords.push(word);
    }
  }

  if (longestWords.length > 1) {
    return [
      'Самые длинные слова в вашей фразе: ',
      longestWords.join(', ') + '; ',
      `их длина равна ${longestWord.length} символам.`
    ];
  }
  return [
    'Самое длинное слово в вашей фразе: ',
    longestWord + '; ',
    `его длина равна ${longestWord.length} символам.`
  ];
};

button3.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);

  const resultArray = findLongestWord();
  answerWords.style.color = '#2ac940';
  answerDescription.textContent = resultArray[0];
  answerWords.textContent = resultArray[1];
  answerWordsLength.textContent = resultArray[2];
});
