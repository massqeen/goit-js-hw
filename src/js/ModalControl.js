export default class ModalControl {
  constructor(modalRef, galleryItems) {
    this._modalRef = modalRef;
    this._buttonPrev = this._modalRef.querySelector('.js-lightbox-prev');
    this._buttonNext = this._modalRef.querySelector('.js-lightbox-next');
    this._modalImageRef = this._modalRef.querySelector('.lightbox__image');
    this._galleryItems = galleryItems;
    this._imgId = 0;
  }

  get imgId() {
    return this._imgId;
  }

  set imgId(value) {
    this._imgId = value;
  }

  openModal() {
    this.resetImgSrc();
    this.bodyLock();
    if (this.imgId > 0) {
      this.setButtonPrevActive();
    }
    if (this.imgId < this._galleryItems.length - 1) {
      this.setButtonNextActive();
    }
    this._modalRef.classList.add('is-open');
    window.addEventListener('keydown', this.keyPressHandler);
    this._buttonPrev.addEventListener('click', this.sliderPrevClickHandler);
    this._buttonNext.addEventListener('click', this.sliderNextClickHandler);
  }

  keyPressHandler = (e) => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
    if (e.code === 'ArrowRight' && this.imgId < this._galleryItems.length - 1) {
      this.nextImage();
    }
    if (e.code === 'ArrowLeft' && this.imgId > 0) {
      this.prevImage();
    }
  };

  sliderPrevClickHandler = () => {
    this.prevImage();
  };

  sliderNextClickHandler = () => {
    this.nextImage();
  };

  prevImage() {
    this._modalImageRef.src = this._galleryItems[+this.imgId - 1].original;
    this.imgId -= 1;
    if (this.imgId === 0) {
      this.setButtonPrevInactive();
    }
    if (this.imgId < this._galleryItems.length - 1) {
      this.setButtonNextActive();
    }
  }

  nextImage() {
    this._modalImageRef.src = this._galleryItems[+this.imgId + 1].original;
    this.imgId += 1;
    if (this.imgId === this._galleryItems.length - 1) {
      this.setButtonNextInactive();
    }
    if (this.imgId > 0) {
      this.setButtonPrevActive();
    }
  }

  closeModal = () => {
    window.removeEventListener('keydown', this.keyPressHandler);
    this._buttonPrev.removeEventListener('click', this.sliderPrevClickHandler);
    this._buttonNext.removeEventListener('click', this.sliderNextClickHandler);
    this.imgId = 0;
    this._modalRef.classList.remove('is-open');
    this.bodyUnLock();
    this.setButtonPrevInactive();
    this.setButtonNextInactive();
  };

  resetImgSrc() {
    this._modalImageRef.src = '';
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

  setButtonPrevActive() {
    this._buttonPrev.removeAttribute('disabled');
    this._buttonPrev.classList.remove('lightbox-slider__btn--inactive');
  }

  setButtonNextActive() {
    this._buttonNext.removeAttribute('disabled');
    this._buttonNext.classList.remove('lightbox-slider__btn--inactive');
  }

  setButtonPrevInactive() {
    this._buttonPrev.setAttribute('disabled', 1);
    this._buttonPrev.classList.add('lightbox-slider__btn--inactive');
  }

  setButtonNextInactive() {
    this._buttonNext.setAttribute('disabled', 1);
    this._buttonNext.classList.add('lightbox-slider__btn--inactive');
  }
}
