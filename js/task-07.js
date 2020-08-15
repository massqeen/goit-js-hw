const inputRef = document.getElementById('font-size-control'),
  textRef = document.getElementById('text');
const inputChangeHandler = () => {
  textRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.setAttribute('min', '8');
inputRef.setAttribute('max', '40');
inputRef.setAttribute('value', '16');
inputRef.addEventListener('input', inputChangeHandler);
