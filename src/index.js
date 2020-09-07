import './scss/main.scss';
const debounce = require('lodash/debounce');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import updateCountriesMarkup from './js/updateCountriesMarkup';

import fetchCountry from './js/fetch';
import refs from './js/refs';
import { searchError, searchErrorNotFound } from './js/notifyErrors';

const inputHandler = ({ target: { value } }) => {
  if (!value) {
    return;
  }

  fetchCountry(value)
    .then((countries) => {
      if (countries.length <= 10) {
        updateCountriesMarkup.show(countries);
        return;
      }
      searchError();
    })
    .catch((err) => {
      searchErrorNotFound(err);
    });
};

refs.search.addEventListener('input', debounce(inputHandler, 800));
