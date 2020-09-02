import getRandomColor from './randomIntegerFromInterval';
import { refs, colors } from '../index';
let timerId = null;

const setColors = (min, max) => {
  const colorIndex = getRandomColor(min, max);
  refs.body.style.backgroundColor = colors[colorIndex];
  timerId = setTimeout(setColors, 1000, 0, colors.length - 1);
};

export { setColors, timerId };
