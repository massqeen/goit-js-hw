export default class ModalControl {
  constructor(modalRef, galleryItems) {
    this._modalRef = modalRef;
    this._modalImageRef = this._modalRef.querySelector('.lightbox__image');
    this._galleryItems = galleryItems;
    this._imgId = 0;
  }

  get imgId() {
    return this._imgId;
  }

  set imgId(value) {
    this._imgId = +value;
  }

  openModal() {
    this.resetImgSrc();
    this.bodyLock();
    this._modalRef.classList.add('is-open');
    window.addEventListener('keydown', this.keyPressHandler);
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

  prevImage() {
    this._modalImageRef.src = this._galleryItems[+this.imgId - 1].original;
    this.imgId -= 1;
    console.log(this.imgId);
  }

  nextImage() {
    this._modalImageRef.src = this._galleryItems[+this.imgId + 1].original;
    this.imgId += 1;
    console.log(this.imgId);
  }

  closeModal = () => {
    window.removeEventListener('keydown', this.keyPressHandler);
    this._modalRef.classList.remove('is-open');
    this.bodyUnLock();
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
}
