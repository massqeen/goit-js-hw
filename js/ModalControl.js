export default class ModalControl {
  constructor(modalRef) {
    this._modalRef = modalRef;
  }
  openModal() {
    this._modalRef.classList.add('is-open');
    window.addEventListener('keydown', this.escPressHandler);
  }
  escPressHandler = (e) => {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', this.escPressHandler);
      this.closeModal();
    }
  };
  closeModal() {
    this._modalRef.classList.remove('is-open');
  }
}
