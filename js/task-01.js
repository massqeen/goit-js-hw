const arrayNames = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'],
  arrayNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  button1 = document.getElementById('button-1'),
  solution1 = document.querySelector('.solution-1');

const logItems = (array) => {
  const arrayResult = [];
  for (let i = 0; i < array.length; i += 1) {
    let output = `${i + 1} - ${array[i]}`;
    arrayResult.push(output);
  }
  return arrayResult.join(', ');
};

button1.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);

  const result1 = logItems(arrayNames);
  solution1.insertAdjacentHTML('beforeend', `<p>${result1};</p>`);
  const result2 = logItems(arrayNumbers);
  solution1.insertAdjacentHTML('beforeend', `<p>${result2};</p>`);
});
