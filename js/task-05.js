const buttonAccelerate = document.getElementById('buttonAccelerate'),
  buttonBrake = document.getElementById('buttonBrake'),
  buttonHours = document.getElementById('buttonHours'),
  buttonPrice = document.getElementById('buttonPrice'),
  buttonTurnOnOff = document.getElementById('turnOn-Off'),
  hoursInput = document.getElementById('hours'),
  priceInput = document.getElementById('price'),
  solution5 = document.querySelector('.solution-5'),
  speedDeltaInput = document.getElementById('speedDelta');

class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    return `Max speed: ${maxSpeed} km/h, speed: ${speed} km/h, is on: ${isOn}, 
    distance: ${distance} km, price: ${price}.`;
  }
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOnOff() {
    this.isOn = this.isOn === false;
    if (!this.isOn) {
      this.speed = 0;
    }
  }
  accelerate(value) {
    if (!this.isOn) {
      this.turnOnOff();
    }
    this.speed =
      this.speed + value <= this.maxSpeed ? this.speed + value : this.maxSpeed;
  }
  brake(value) {
    this.speed = this.speed - value >= 0 ? this.speed - value : 0;
  }
  drive(hours) {
    if (!this.isOn || this.speed === 0) {
      alert('Заведите авто и нажмите на газ!');
      return;
    }
    this.distance += hours * this.speed;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
solution5.textContent = Car.getSpecs(mustang);

const handleButtonPriceClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  mustang.price = Math.abs(priceInput.value);
  solution5.textContent = Car.getSpecs(mustang);
};

const handleButtonTurnOnOffClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  mustang.turnOnOff();
  solution5.textContent = Car.getSpecs(mustang);
};

const handleButtonAccelerateClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  mustang.accelerate(Math.abs(speedDeltaInput.value));
  solution5.textContent = Car.getSpecs(mustang);
};

const handleButtonBrakeClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  mustang.brake(Math.abs(speedDeltaInput.value));
  solution5.textContent = Car.getSpecs(mustang);
};

const handleButtonHoursClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(5);
  mustang.drive(Math.abs(hoursInput.value));
  solution5.textContent = Car.getSpecs(mustang);
};

buttonPrice.addEventListener('click', handleButtonPriceClick);
buttonTurnOnOff.addEventListener('click', handleButtonTurnOnOffClick);
buttonAccelerate.addEventListener('click', handleButtonAccelerateClick);
buttonBrake.addEventListener('click', handleButtonBrakeClick);
buttonHours.addEventListener('click', handleButtonHoursClick);
