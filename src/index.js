import './scss/main.scss';
// import './js/lazyLoad';
import fetchImages from './js/fetchImages';
import updateImagesMarkup from './js/updateImagesMarkup';
import refs from './js/refs';

const options = {
  apiKey: '18257903-4453e2975e3dd917fd04b41f9',
  baseUrl: 'https://pixabay.com/api/',
  perPage: 20,
  editorsChoice: false
};

fetchImages('', {
  ...options,
  perPage: 10,
  editorChoice: true
}).then(updateImagesMarkup);

const submitHandler = (e) => {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.query.value;
  refs.gallery.innerHTML = '';
  fetchImages(inputValue, options).then(updateImagesMarkup);
  e.currentTarget.reset();
};

refs.searchForm.addEventListener('submit', submitHandler);
