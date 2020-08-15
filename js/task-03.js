const galleryRef = document.getElementById('gallery');
const images = [
  {
    url:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    alt: '"Notebook"'
  },
  {
    url:
      'https://images.unsplash.com/photo-1568378259895-f15089a7f544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80',
    alt: '"Wall"'
  },
  {
    url:
      'https://images.unsplash.com/photo-1597226417297-6b99b273ded6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: '"Desert"'
  },
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: '"White and Black Long Fur Cat"'
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: '"Orange and White Koi Fish Near Yellow Koi Fish"'
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: '"Group of Horses Running"'
  }
];
const createGalleryElement = (img) => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('gallery__list-item');
  listItemRef.insertAdjacentHTML(
    'afterbegin',
    `<img src=${img.url} alt=${img.alt} width="380" height="200">`
  );
  return listItemRef;
};

const galleryElements = images.map((item) => createGalleryElement(item));
galleryRef.append(...galleryElements);
