const decrementRef = document.querySelector('button[data-action="decrement"]'),
  incrementRef = document.querySelector('button[data-action="increment"]'),
  valueRef = document.getElementById('value');

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  showCounterValue();
};
const increment = () => {
  counterValue += 1;
  showCounterValue();
};
const showCounterValue = () => (valueRef.textContent = counterValue);
decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
valueRef.textContent = counterValue;
