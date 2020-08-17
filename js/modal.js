const refs = {
  openModal: document.querySelector('.button[data-action="open-modal"]'),
  backdrop: document.querySelector('.js-backdrop')
};

const openModalHandler = () => {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', modalEscapeHandler);
};

const closeModalHandler = () => {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', modalEscapeHandler);
};

const modalEscapeHandler = (e) => {
  if (e.code === 'Escape') {
    closeModalHandler();
  }
};

const backdropClickHandler = (e) => {
  if (
    e.target === e.currentTarget ||
    e.target ===
      refs.backdrop.querySelector('.button[data-action="close-modal"]')
  ) {
    closeModalHandler();
  }
};

refs.openModal.addEventListener('click', openModalHandler);
refs.backdrop.addEventListener('click', backdropClickHandler);
