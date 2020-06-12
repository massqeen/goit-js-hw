const button4 = document.getElementById('button-4'),
  creditsOutput = document.querySelector('.credits'),
  droidsInput = document.getElementById('droid'),
  droidsOutput = document.querySelector('.droids-number'),
  droidPrice = 3000;
let credits = 23580,
  droids = 0,
  droidsTotal = 0;

button4.addEventListener('click', event => {
  event.preventDefault();
  droids = Number(droidsInput.value);

  Tinycon.setBubble(4);
  /* prettier-ignore */
  if (droids <= 0) {
    alert('Число дроидов должно быть больше 0!');
  } else if (credits >= droids * droidPrice) {
    credits -= droids * droidPrice;
    droidsTotal += droids;
    creditsOutput.textContent = credits;
    droidsOutput.textContent = droidsTotal;
  } else alert ('Недостаточно средств на счету!')
});
