import './scss/main.scss';
const debounce = require('lodash/debounce');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import PNotify from '@pnotify/core/dist/PNotify.js';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyAnimate from '@pnotify/animate';
import fetchCountry from './js/fetch';
import refs from './js/refs';
import { searchError, searchErrorNotFound } from './js/notifyErrors';

const inputHandler = ({ target: { value } }) => {
  value &&
    fetchCountry(value)
      .then((countries) => {
        if (countries.length <= 10) {
          updateCountriesMarkup(countries);
        } else if (countries.length > 10) {
          searchError();
        }
      })
      .catch((err) => {
        searchErrorNotFound(err);
      });
};

import { notice, error } from '@pnotify/core';
const test = [
  ...defaultModules,
  [
    PNotifyAnimate,
    {
      inClass: 'rotateInUpRight',
      outClass: 'rotateOutUpRight'
    }
  ]
];
console.log(test);
refs.search.addEventListener('input', debounce(inputHandler, 800));
notice({
  text: 'I use the Animate module in addition to the defaults.',
  modules: new Map([test])
});
