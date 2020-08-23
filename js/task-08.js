import DivGenerator from './DivGenerator.js';

const boxesRef = document.getElementById('boxes'),
  buttonDestroyRef = document.querySelector('button[data-action="destroy"]'),
  inputRef = document.querySelector('#controls>input'),
  buttonRenderRef = document.querySelector('button[data-action="render"]');

buttonRenderRef.setAttribute('disabled', '1');
buttonDestroyRef.setAttribute('disabled', '1');

const divGenerator = new DivGenerator(20, boxesRef);

const destroyBoxesHandler = () => {
  divGenerator.destroyBoxes();
  divGenerator.resetDivDimensions();
  buttonDestroyRef.setAttribute('disabled', '1');
};

const inputCheckHandler = () => {
  if (inputRef.value > 0 && inputRef.value <= 100) {
    buttonRenderRef.removeAttribute('disabled');
    return;
  }
  buttonRenderRef.setAttribute('disabled', '1');
};

const createBoxesHandler = () => {
  const boxes = divGenerator.createBoxes(inputRef.value);
  boxesRef.append(...boxes);
  buttonDestroyRef.removeAttribute('disabled');
};

inputRef.addEventListener('input', inputCheckHandler);
buttonRenderRef.addEventListener('click', createBoxesHandler);
buttonDestroyRef.addEventListener('click', destroyBoxesHandler);
