import './scss/main.scss';
const debounce = require('lodash/debounce');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import Loader from './js/components/Loader';
import fetchCountry from './js/fetch';
import refs from './js/refs';
import { searchError, searchErrorNotFound } from './js/notifyErrors';

const loader = new Loader('.js-loader', 'is-hidden');

const inputHandler = ({ target: { value } }) => {
  if (!value) {
    return;
  }

  loader.show();
  fetchCountry(value)
    .then((countries) => {
      if (countries.length <= 10) {
        updateCountriesMarkup.show(countries);
        loader.hide();
        return;
      }
      loader.hide();
      searchError();
    })
    .catch((err) => {
      loader.hide();
      searchErrorNotFound(err);
    });
};

const listClickHandler = (e) => {
  if (e.target.nodeName === 'A') {
    loader.show();
    fetchCountry(e.target.innerText).then((country) => {
      loader.hide();
      return updateCountriesMarkup.show(country);
    });
  }
};

refs.search.addEventListener('input', debounce(inputHandler, 600));
refs.countriesList.addEventListener('click', listClickHandler);
