<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> gh-pages
const button1 = document.getElementById('button-1'),
  email = document.getElementById('email'),
  login = document.getElementById('login'),
  solution1 = document.querySelector('.solution-1');

const Account = function (inputLogin, inputEmail) {
  this.login = inputLogin;
  this.email = inputEmail;
};
Account.prototype.getInfo = function () {
  solution1.textContent = `Login: ${this.login}, Email: ${this.email}`;
<<<<<<< HEAD
=======
const addOrderBtn = document.getElementById('button-1-addOrder'),
  addOrderInput = document.getElementById('orderPrice'),
  discountBtn = document.getElementById('button-1-discount'),
  discountInput = document.getElementById('discount'),
  ordersBtn = document.getElementById('button-1-orders'),
  solution = document.querySelector('.solution-1');

const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost) {
    this.balance -= cost * (1 - this.discount);
    this.orders.push(`order-${this.orders.length + 1}`);
  }
};

const handleDiscountBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);
  if (discountInput.value >= 0 && discountInput.value <= 0.5) {
    account.changeDiscount(discountInput.value);
    solution.textContent = `Скидка установлена в размере ${
      account.discount * 100
    }%`;
    return;
  }
  alert('Введите число от 0 до 0,5!');
>>>>>>> 1652ee1d2a434292091dcaa4295b6aac04105084
=======
>>>>>>> gh-pages
};

const handleOrdersBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);
<<<<<<< HEAD
<<<<<<< HEAD
  const account = new Account(login.value, email.value);
  account.getInfo();
  console.log(account);
=======
  solution.textContent = `Подтвержденные заказы: ${account
    .showOrders()
    .join(', ')}.`;
};

const handleAddOrderBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);
  if (addOrderInput.value > 0 && addOrderInput.value <= account.balance) {
    account.addOrder(addOrderInput.value);
    solution.textContent = `Заказ подтвержден! Ваш баланс: ${account.balance}`;
    return;
  }
  if (addOrderInput.value > account.balance) {
    alert('Недостаточно средств на счету :(');
    return;
  }
  alert('Введите число больше  0!');
>>>>>>> 1652ee1d2a434292091dcaa4295b6aac04105084
=======
  const account = new Account(login.value, email.value);
  account.getInfo();
  console.log(account);
>>>>>>> gh-pages
};

discountBtn.addEventListener('click', handleDiscountBtnClick);
ordersBtn.addEventListener('click', handleOrdersBtnClick);
addOrderBtn.addEventListener('click', handleAddOrderBtnClick);
