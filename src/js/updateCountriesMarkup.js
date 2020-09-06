import countryItemsTmpl from '../templates/countryItems.hbs';
import countryCardTmpl from '../templates/countryCard.hbs';
import refs from './refs';

function updateCountriesMarkup(countries) {
  if (countries.length === 1) {
    refs.countriesList.innerHTML = '';
    const markup = countryCardTmpl(countries[0]);
    refs.card.innerHTML = markup;
  } else {
    refs.card.innerHTML = '';
    const markup = countryItemsTmpl(countries);
    refs.countriesList.innerHTML = markup;
  }
}

export default updateCountriesMarkup;
