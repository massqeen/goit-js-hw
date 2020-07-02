const button6 = document.getElementById('button-6'),
  checkMessage = 'Введите любое число (для выхода нажмите "cancel")',
  totalSum = document.querySelector('.total-sum');
let input,
  total = 0;

button6.addEventListener('click', event => {
  event.preventDefault();
  Tinycon.setBubble(6);

  for (let i = 1; i > 0; i += 1) {
    let cancelCheck = prompt(checkMessage);
    input = Number(cancelCheck);

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз!');
      continue;
    } else if (cancelCheck === null) {
      break;
    }

    total += input;
    totalSum.textContent = total;
  }
});
