export default class ModalControl {
  constructor(modalRef) {
    this._modalRef = modalRef;
  }
  openModal() {
    this._modalRef.classList.add('is-open');
  }

  closeModal() {
    this._modalRef.classList.remove('is-open');
  }
}
