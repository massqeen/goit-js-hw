const button5 = document.getElementById('button-5'),
  countryEl = document.getElementById('country'),
  solution5 = document.querySelector('.solution-5');
let price;

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

button5.addEventListener('click', event => {
  event.preventDefault();
  let country = countryEl.value;
  country = country.trim();
  country = country.toLowerCase();

  Tinycon.setBubble(5);

  switch (country) {
    case 'китай':
      price = 100;
      solution5.textContent = `Доставка в ${capitalizeFirstLetter(
        country,
      )} будет стоить ${price} кредитов`;
      break;

    case 'чили':
      price = 250;
      solution5.textContent = `Доставка в ${capitalizeFirstLetter(
        country,
      )} будет стоить ${price} кредитов`;
      break;

    case 'австралия':
      price = 170;
      solution5.textContent = `Доставка в ${capitalizeFirstLetter(
        country,
      )} будет стоить ${price} кредитов`;
      break;

    case 'индия':
      price = 80;
      solution5.textContent = `Доставка в ${capitalizeFirstLetter(
        country,
      )} будет стоить ${price} кредитов`;
      break;

    case 'ямайка':
      price = 120;
      solution5.textContent = `Доставка в ${capitalizeFirstLetter(
        country,
      )} будет стоить ${price} кредитов`;
      break;

    default:
      solution5.textContent = 'В вашей стране доставка не доступна';
  }
});
