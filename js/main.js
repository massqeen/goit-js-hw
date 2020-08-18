import ModalControl from './ModalControl.js';
import galleryItems from './gallery-items.js';
import GalleryGenerator from './GalleryGenerator.js';

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox')
};

const modalControl = new ModalControl(refs.lightbox, galleryItems);
const galleryGenerator = new GalleryGenerator(galleryItems);

refs.galleryRef.append(...galleryGenerator.createAllElements());

const galleryClickHandler = (e) => {
  if (e.target.nodeName === 'IMG') {
    modalControl.imgId = e.target.dataset.id;
    modalControl.openModal();
    const imgRef = refs.lightbox.querySelector('.lightbox__image');
    imgRef.src = e.target.dataset.src;
    imgRef.alt = e.target.alt;
  }
};

const lightboxClickHandler = (e) => {
  if (e.target.nodeName === 'BUTTON') {
    modalControl.closeModal();
  }
};

refs.galleryRef.addEventListener('click', galleryClickHandler);
refs.lightbox.addEventListener('click', lightboxClickHandler);
