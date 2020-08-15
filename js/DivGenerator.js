export default class DivGenerator {
  constructor(divDimension, containerRef) {
    this._divDimension = divDimension;
    this._containerRef = containerRef;
  }

  rgbGenerator() {
    const redColor = Math.round(255.0 * Math.random());
    const greenColor = Math.round(255.0 * Math.random());
    const blueColor = Math.round(255.0 * Math.random());
    return [redColor, greenColor, blueColor];
  }

  changeDivDimensions() {
    this._divDimension += 10;
    return this._divDimension;
  }

  resetDivDimensions = () => {
    this._divDimension = 20;
  };

  createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = `rgb(${this.rgbGenerator()})`;
      box.style.width = `${this.changeDivDimensions()}px`;
      box.style.height = `${this._divDimension}px`;
      boxes.push(box);
    }
    return boxes;
  }

  destroyBoxes() {
    while (this._containerRef.firstChild) {
      this._containerRef.firstChild.remove();
    }
  }
}
