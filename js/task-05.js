const inputRef = document.getElementById('name-input'),
  outputRef = document.getElementById('name-output');
const inputHandler = () => {
  outputRef.textContent = inputRef.value;
};
inputRef.addEventListener('input', inputHandler);
