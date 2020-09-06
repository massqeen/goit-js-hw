import countryItemsTmpl from '../templates/countryItems.hbs';
import countryCardTmpl from '../templates/countryCard.hbs';
import refs from './refs';

function updateCountriesMarkup(countries) {
  if (countries.length === 1) {
    refs.countriesList.innerHTML = '';
    refs.card.innerHTML = countryCardTmpl(countries[0]);
  } else {
    refs.card.innerHTML = '';
    refs.countriesList.innerHTML = countryItemsTmpl(countries);
  }
}

export default updateCountriesMarkup;
