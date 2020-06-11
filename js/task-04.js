const pricePerDroid = 3000;
let credits = 23580;

for (let i = 1; i > 0; i += 1) {
  let droidRequest = prompt('Сколько дроидов вы хотите купить?');
  if (droidRequest === null) {
    console.log('Отменено пользователем');
    break;
  }

  if (Number.isNaN(droidRequest) || Number(droidRequest <= 0)) {
    console.log(droidRequest);
    alert('Пожалуйста, введите число больше 0!');
    continue;
  }

  let totalPrice = Number(droidRequest) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
    break;
  }

  console.log(
    `Вы купили ${Number(droidRequest)} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`,
  );
  credits -= totalPrice;
  console.log(credits);
  break;
}

Tinycon.setBubble(4);