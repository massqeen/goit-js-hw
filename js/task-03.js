const button3 = document.getElementById('button-3'),
  solution3 = document.querySelector('.solution-3'),
  string = document.getElementById('string-3');

const findLongestWord = () => {
  const words = string.value.split(' ');
  let longestWord = '';
  let longestWords = [];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      longestWords = [longestWord];
    }
    if (word.length === longestWord.length && word !== longestWord) {
      longestWords.push(word);
    }
  }

  if (longestWords.length > 1) {
    return `Самые длинные слова в вашей фразе: ${longestWords.join(
      ', '
    )}; их длина равна ${longestWord.length} символам.`;
  }
  return `Самое длинное слово в вашей фразе: ${longestWord}; его длина равна ${longestWord.length} символам.`;
};

button3.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);

  solution3.textContent = findLongestWord();
});
