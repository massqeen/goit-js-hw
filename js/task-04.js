const droidPrice = 3000,
  button4 = document.querySelector('#button-4'),
  solution4 = document.querySelector('.solution-4'),
  creditsOutput = document.querySelector('.credits'),
  droidsOutput = document.querySelector('.droids-number'),
  droidsInput = document.querySelector('#droid');
let credits = 23580,
  droids = Number(droidsInput.value);

button4.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(4);
  /* prettier-ignore */
  droids = droids > 0 ? droids : alert('Число дроидов должно быть больше 0!');

  // if (credits >= Number(droidsInput.value) * droidPrice) {
  //   credits -= Number(droidsInput.value) * droidPrice;
  //   droids = Number(droidsInput.value);
  // }
});
