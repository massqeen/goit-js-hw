const images = document.querySelectorAll('.card__image');
const options = { rootMargin: '100px' };

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.lazy;
      observer.unobserve(image);
    }
  });
};

const intersectionObserver = new IntersectionObserver(onEntry, options);

images.forEach((image) => {
  intersectionObserver.observe(image);
});
