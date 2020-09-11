import imageCardTemplate from '../templates/imageCard.hbs';
import refs from './refs';

const updateImagesMarkup = (images) => {
  const markup = imageCardTemplate(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};

export default updateImagesMarkup;
