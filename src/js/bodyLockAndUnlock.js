const bodyLock = () => {
  document.body.style.paddingRight =
    window.innerWidth - document.querySelector('.container').offsetWidth + 'px';
  document.body.classList.add('is-lock');
};

const bodyUnlock = () => {
  document.body.style.paddingRight = '0px';
  document.body.classList.remove('is-lock');
};

export { bodyLock, bodyUnlock };
