const button2 = document.getElementById('button-2'),
  solution2 = document.querySelector('.solution-2');

button2.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(2);

  // const logItems = array => {
  //   const arrayResult = [];
  //   for (let i = 0; i < array.length; i += 1) {
  //     let output = `${i + 1} - ${array[i]}`;
  //     arrayResult.push(output);
  //   }
  //   return arrayResult.join(', ');
  // };
  // const result1 = logItems(arrayNames);
  // solution1.insertAdjacentHTML('beforeend', `<p>${result1};</p>`);
  // const result2 = logItems(arrayNumbers);
  // solution1.insertAdjacentHTML('beforeend', `<p>${result2};</p>`);
});
