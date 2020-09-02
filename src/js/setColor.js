import getRandomColor from './randomIntegerFromInterval';
import { refs, colors } from '../index';

const setColor = (min, max) => {
  const colorIndex = getRandomColor(min, max);
  refs.body.style.backgroundColor = colors[colorIndex];
};

export default setColor;
