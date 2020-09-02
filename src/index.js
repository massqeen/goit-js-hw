import './scss/main.scss';
import setColor from './js/setColor';

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
let id = null;

const stopClickHandler = () => {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(id);
};

const startClickHandler = () => {
  refs.startBtn.setAttribute('disabled', 1);
  id = setInterval(setColor, 1000, 0, colors.length - 1);
};

refs.startBtn.addEventListener('click', startClickHandler);
refs.stopBtn.addEventListener('click', stopClickHandler);

export { refs, colors };
