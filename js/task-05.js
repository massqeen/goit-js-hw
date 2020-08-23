const inputRef = document.getElementById('name-input'),
  outputRef = document.getElementById('name-output');

const inputHandler = () => {
  outputRef.textContent = inputRef.value ? inputRef.value : 'незнакомец';
};

inputRef.addEventListener('input', inputHandler);
