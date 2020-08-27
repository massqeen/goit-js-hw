import './scss/main.scss';
import markup from './js/templating';
import './js/theme';

const menuRef = document.querySelector('.js-menu');

const insertMarkup = (el, html) => el.insertAdjacentHTML('beforeend', html);
insertMarkup(menuRef, markup);
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  document.querySelector('.js-switch-input').checked = true;
}
