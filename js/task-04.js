const button4Begin = document.getElementById('button-4Begin'),
  button4BothEdges = document.getElementById('button-4BothEdges'),
  button4End = document.getElementById('button-4End'),
  solution4 = document.querySelector('.solution-4'),
  string = document.getElementById('string');

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
    return this.value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this.value;
  }
  pad(str) {
    this._value = str + this._value + str;
    return this.value;
  }
}

const builder = new StringBuilder('.');

const handleButtonBeginClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(4);
  solution4.textContent = builder.prepend(string.value);
};

const handleButtonEndClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(4);
  solution4.textContent = builder.append(string.value);
};

const handleButtonBothEdgesClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(4);
  solution4.textContent = builder.pad(string.value);
};
button4Begin.addEventListener('click', handleButtonBeginClick);
button4End.addEventListener('click', handleButtonEndClick);
button4BothEdges.addEventListener('click', handleButtonBothEdgesClick);
