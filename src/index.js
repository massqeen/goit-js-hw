import './scss/main.scss';
import ModalControl from './js/ModalControl';
import galleryItems from './js/gallery-items';
import GalleryGenerator from './js/GalleryGenerator';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxCloseButton: document.querySelector(
    'button[data-action="close-lightbox"]'
  )
};

const modalControl = new ModalControl(refs.lightbox, galleryItems);
const galleryGenerator = new GalleryGenerator(galleryItems);

refs.gallery.append(...galleryGenerator.createAllElements());

const galleryClickHandler = (e) => {
  if (e.target.nodeName === 'IMG') {
    modalControl.imgId = +e.target.dataset.id;
    modalControl.openModal();
    const imgRef = refs.lightbox.querySelector('.lightbox__image');
    imgRef.src = e.target.dataset.src;
    imgRef.alt = e.target.alt;
  }
};

const lightboxClickHandler = (e) => {
  if (e.target === refs.lightboxCloseButton) {
    modalControl.closeModal();
  }
};

refs.gallery.addEventListener('click', galleryClickHandler);
refs.lightbox.addEventListener('click', lightboxClickHandler);
