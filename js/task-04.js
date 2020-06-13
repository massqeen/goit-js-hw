const button4 = document.getElementById('button-4'),
  creditsOutput = document.querySelector('.credits'),
  droidPrice = 3000,
  droidsInput = document.getElementById('droid'),
  droidsOutput = document.querySelector('.droids-number');
let credits = 23580,
  droids = 0,
  droidsTotal = 0;

button4.addEventListener('click', event => {
  event.preventDefault();
  droids = Number(droidsInput.value);

  Tinycon.setBubble(4);

  if (droids <= 0 || Number.isNaN(droids)) {
    alert('Пожалуйста, введите число больше 0!');
  } else if (Number.isInteger(droids)) {
    if (credits >= droids * droidPrice) {
      credits = credits - droids * droidPrice;
      droidsTotal = droidsTotal + droids;
      creditsOutput.textContent = credits;
      droidsOutput.textContent = droidsTotal;
    } else {
      alert('Недостаточно средств на счету!');
    }
  } else {
    alert('Извините, мы не продаем дроидов по частям!');
  }
});
