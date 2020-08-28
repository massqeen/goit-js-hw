import markup from './templating';

const menuRef = document.querySelector('.js-menu');
const insertMarkup = (el, html) => el.insertAdjacentHTML('beforeend', html);

insertMarkup(menuRef, markup);
