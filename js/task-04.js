const button4 = document.getElementById('button-4'),
  solution4 = document.querySelector('.solution-4'),
  symbols = document.getElementById('symbols');

button4.addEventListener('click', (event) => {
  event.preventDefault();

  Tinycon.setBubble(4);

  const formatString = () => {
    if (symbols.value.length <= 40) {
      return symbols.value;
    }
    return symbols.value.slice(0, 39) + '.' + '.' + '.';
  };
  solution4.textContent = formatString();
});
