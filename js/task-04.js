const button4 = document.getElementById('button-4'),
  solution4 = document.querySelector('.solution-4'),
  symbols = document.getElementById('symbols');

const formatString = () => {
  return symbols.value.length <= 40
    ? symbols.value
    : `${symbols.value.slice(0, 39)}...`;
};

button4.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(4);

  solution4.textContent = formatString();
});
