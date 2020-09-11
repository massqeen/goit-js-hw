import './scss/main.scss';
// import './js/lazyLoad';
import imagesService from './js/imagesAPI-service';
import updateImagesMarkup from './js/updateImagesMarkup';
import refs from './js/refs';
import { searchError, searchErrorNotFound } from './js/notifyErrors';
import Loader from './js/components/Loader';

const loader = new Loader('.js-loader', 'is-hidden');

imagesService.fetchImages().then((images) => {
  updateImagesMarkup.show(images);
  imagesService.editors = false;
  imagesService.imagesPerPage = 12;
});

const submitHandler = (e) => {
  e.preventDefault();
  updateImagesMarkup.reset();
  imagesService.query = e.currentTarget.elements.query.value;
  imagesService.resetPage();
  imagesService.fetchImages().then(updateImagesMarkup.show);
  e.currentTarget.reset();
};

const loadMoreClickHandler = (e) => {
  e.preventDefault();
  imagesService.fetchImages().then(updateImagesMarkup.show);
};

refs.searchForm.addEventListener('submit', submitHandler);
refs.loadMore.addEventListener('click', loadMoreClickHandler);
