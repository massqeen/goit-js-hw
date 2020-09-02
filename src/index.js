import './scss/main.scss';
import { setColors, timerId } from './js/setColor';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548'
];

const stopClickHandler = () => {
  refs.startBtn.removeAttribute('disabled');
  clearTimeout(timerId);
};

const startClickHandler = () => {
  refs.startBtn.setAttribute('disabled', 1);
  setColors(0, colors.length - 1);
};

refs.startBtn.addEventListener('click', startClickHandler);
refs.stopBtn.addEventListener('click', stopClickHandler);

export { refs, colors };
