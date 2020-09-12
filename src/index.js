import './scss/main.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import './js/components/lazyLoad';
import * as basicLightbox from 'basiclightbox';
import imagesService from './js/imagesAPI-service';
import updateImagesMarkup from './js/updateImagesMarkup';
import refs from './js/refs';
import Loader from './js/components/Loader';
import updateLightboxMarkup from './js/updateLightboxMarkup';

const loader = new Loader('.js-loader', 'is-hidden');

imagesService.fetchImages().then((images) => {
  updateImagesMarkup.show(images);
  imagesService.editors = false;
  imagesService.imagesPerPage = 12;
});

const submitHandler = (e) => {
  e.preventDefault();
  updateImagesMarkup.reset();
  loader.show();
  imagesService.query = e.currentTarget.elements.query.value;
  imagesService.resetPage();
  imagesService
    .fetchImages()
    .then(updateImagesMarkup.show)
    .finally(() => loader.hide());
  e.currentTarget.reset();
};

const loadMoreClickHandler = (e) => {
  e.preventDefault();
  imagesService.fetchImages().then(updateImagesMarkup.show);
};

const galleryClickHandler = ({ target }) => {
  if (target.nodeName === 'IMG') {
    basicLightbox
      .create(
        updateLightboxMarkup(target.dataset.source, target.getAttribute('alt'))
      )
      .show();
  }
};

refs.searchForm.addEventListener('submit', submitHandler);
refs.loadMore.addEventListener('click', loadMoreClickHandler);
refs.gallery.addEventListener('click', galleryClickHandler);
