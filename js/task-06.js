const inputRef = document.getElementById('validation-input');
const checkValidationHandler = () => {
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');
  +inputRef.dataset.length === inputRef.value.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
};
inputRef.addEventListener('blur', checkValidationHandler);
