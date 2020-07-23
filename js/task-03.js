const button3Add = document.getElementById('button-3Add'),
  button3Remove = document.getElementById('button-3Remove'),
  button3Show = document.getElementById('button-3Show'),
  goodName = document.getElementById('goodName'),
  solution3 = document.querySelector('.solution-3');

class Storage {
  constructor(goodsArr) {
    this.goods = goodsArr;
  }
  getItems() {
    return this.goods;
  }
  goodsToLowerCase() {
    const lowerCaseArr = [];
    this.goods.forEach((itemArr) => lowerCaseArr.push(itemArr.toLowerCase()));
    return lowerCaseArr;
  }
  addItem(item) {
    if (this.goodsToLowerCase().includes(item.toLowerCase())) {
      alert('Такой товар уже есть!');
      return;
    }
    this.goods.push(item);
    // eslint-disable-next-line consistent-return
    return `Товар "${item}" успешно добавлен!`;
  }
  removeItem(item) {
    if (
      this.goods.findIndex(
        (arrItem) => arrItem.toLowerCase() === item.toLowerCase()
      ) === -1
    ) {
      alert('Такого товара на складе нет!');
      return;
    }
    this.goods.splice(
      this.goods.findIndex(
        (arrItem) => arrItem.toLowerCase() === item.toLowerCase()
      ),
      1
    );
    // eslint-disable-next-line consistent-return
    return `Товар "${item}" успешно удален!`;
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
]);

const handleButtonAddClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);

  solution3.textContent = storage.addItem(goodName.value);
};

const handleButtonRemoveClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);

  solution3.textContent = storage.removeItem(goodName.value);
};

const handleButtonShowClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);

  solution3.textContent = storage.getItems().join(', ');
};
button3Add.addEventListener('click', handleButtonAddClick);
button3Remove.addEventListener('click', handleButtonRemoveClick);
button3Show.addEventListener('click', handleButtonShowClick);
