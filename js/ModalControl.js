export default class ModalControl {
  constructor(modalRef) {
    this._modalRef = modalRef;
  }

  openModal() {
    this.resetImgSrc();
    this.bodyLock();
    this._modalRef.classList.add('is-open');
    window.addEventListener('keydown', this.escPressHandler);
  }

  escPressHandler = (e) => {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', this.escPressHandler);
      this.closeModal();
    }
  };

  closeModal = () => {
    this._modalRef.classList.remove('is-open');
    this.bodyUnLock();
  };

  resetImgSrc() {
    this._modalRef.querySelector('.lightbox__image').src = '';
  }

  bodyLock() {
    document.body.style.paddingRight =
      window.innerWidth -
      document.querySelector('.container').offsetWidth +
      'px';
    document.body.classList.add('is-lock');
  }

  bodyUnLock() {
    document.body.style.paddingRight = '0px';
    document.body.classList.remove('is-lock');
  }
}
