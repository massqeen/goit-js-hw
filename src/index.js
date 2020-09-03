import './scss/main.scss';
import CountdownTimer from './js/CountdownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 30,2020')
});

timer.start();
