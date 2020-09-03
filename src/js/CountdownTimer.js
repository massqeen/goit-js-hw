class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.$timer = document.querySelector(selector);
    this.$timeUnits = Array.from(this.$timer.querySelectorAll('[data-value]'));
    this.targetTime = targetDate.getTime();
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = this.targetTime - currentTime;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const timeData = [days, hours, minutes, seconds];
      this.updateTimerView(timeData);
    }, 1000);
  }
  updateTimerView(arr) {
    this.$timeUnits.forEach(
      (timeUnit, i) => (timeUnit.textContent = this.pad(arr[i]))
    );
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

export default CountdownTimer;
