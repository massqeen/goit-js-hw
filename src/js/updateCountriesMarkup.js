import countryItemsTmpl from '../templates/countryItems.hbs';
import countryCardTmpl from '../templates/countryCard.hbs';
import refs from './refs';

const updateCountriesMarkup = {
  show(countries) {
    if (countries.length === 1) {
      this.resetMarkup(refs.countriesList);
      refs.card.innerHTML = countryCardTmpl(countries[0]);
      return;
    }
    this.resetMarkup(refs.card);
    refs.countriesList.innerHTML = countryItemsTmpl(countries);
  },
  resetMarkup(selector) {
    selector.innerHTML = '';
  }
};

export default updateCountriesMarkup;
