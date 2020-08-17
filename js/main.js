import galleryItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

const createGalleryElement = (img) => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('gallery__item');
  const listLinkRef = document.createElement('a');
  listLinkRef.classList.add('gallery__link');
  listItemRef.appendChild(listLinkRef);
  listLinkRef.insertAdjacentHTML(
    'afterbegin',
    `<img class="gallery__image" src=${img.preview} alt=\"${img.description}\" data-src=${img.original} data-id=${img.id}>`
  );
  return listItemRef;
};

const galleryElements = galleryItems.map((item) => createGalleryElement(item));
galleryRef.append(...galleryElements);
