import './scss/main.scss';
import imageCardTemplate from './templates/imageCard.hbs';
// import './js/lazyLoad';

const API_KEY = '18257903-4453e2975e3dd917fd04b41f9';
const url = `https://pixabay.com/api/?key=${API_KEY}`;
const refs = {
  gallery: document.querySelector('.gallery')
};

fetch(`${url}&editors_choice&per_page=10`)
  .then((res) => res.json())
  .then(({ hits }) => {
    console.log(hits);
    const markup = imageCardTemplate(hits);
    refs.gallery.innerHTML = markup;
  });
