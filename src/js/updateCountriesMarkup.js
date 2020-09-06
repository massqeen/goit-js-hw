import countryItemsTmpl from '../templates/countryItems.hbs';
import countryCardTmpl from '../templates/countryCard.hbs';
import refs from './refs';

function updateCountriesMarkup(countries) {
  console.log(countries);
  if (countries.length === 1) {
    const markup = countryCardTmpl(countries[0]);
    console.log(markup);
    refs.card.innerHTML = markup;
  } else {
    const markup = countryItemsTmpl(countries);
    refs.countriesList.innerHTML = markup;
  }
}

export default updateCountriesMarkup;
