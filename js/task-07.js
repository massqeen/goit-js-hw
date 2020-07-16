const depositInput = document.getElementById('depositAcc'),
  depositInputBtn = document.getElementById('button-7-deposit'),
  idDetails = document.getElementById('idDetails'),
  idDetailsBtn = document.getElementById('button-7-idDetails'),
  solution = document.querySelector('.solution-7'),
  typeTransaction = document.getElementById('typeTransaction'),
  typeTransactionBtn = document.getElementById('button-7-typeDetails'),
  withdrawInput = document.getElementById('withdrawAcc'),
  withdrawInputBtn = document.getElementById('button-7-withdraw');

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw'
};
const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {};
    transaction.id = this.transactions.length + 1;
    transaction.amount = amount;
    this.balance += type === 'withdraw' ? -amount : amount;
    transaction.type = type;
    return transaction;
  },

  deposit(amount) {
    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    this.transactions.push(depositTransaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert('Недостаточно средств!');
      return;
    }
    const withdrawTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );
    this.transactions.push(withdrawTransaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return false;
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    }

    return transactionTotal;
  }
};
const handleButtonDepositClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(7);
  if (depositInput.value > 0) {
    account.deposit(+depositInput.value);
    solution.textContent = `Спасибо, Ваш счет пополнен! Текущий баланс: 
    ${account.getBalance()}`;
  } else {
    alert('Пожалуйста, введите корректную сумму для пополнения счета!');
  }
};

const handleButtonWithdrawClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(7);
  if (withdrawInput.value > 0) {
    account.withdraw(+withdrawInput.value);
    solution.textContent = `Операция по снятие средств успешно проведена! Текущий баланс: 
    ${account.getBalance()}`;
  } else {
    alert('Пожалуйста, введите корректную сумму для снятия со счета!');
  }
};

const handleButtonIdDetailsClick = (event) => {
  event.preventDefault();
  let result = account.getTransactionDetails(+idDetails.value);
  Tinycon.setBubble(7);
  if (idDetails.value > 0 && result) {
    solution.textContent = `Тип операции: ${result.type}, сумма операции: ${result.amount}`;
  } else {
    solution.textContent = 'Такая транзакция не найдена :(';
  }
  if (idDetails.value <= 0) {
    alert('Номер транзакции должен быть больше 0');
  } else if (account.transactions.length === 0) {
    alert('В истории по вашему счету нет операций :(');
  }
};

const handleButtonTypeTransactionsClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(7);
  if (account.transactions.length === 0) {
    alert('В истории по вашему счету нет операций :(');
  } else {
    let result = account.getTransactionTotal(typeTransaction.value);
    solution.textContent = `Сумма средств по выбранному типу транзакций составляет ${result}`;
  }
};

depositInputBtn.addEventListener('click', handleButtonDepositClick);
withdrawInputBtn.addEventListener('click', handleButtonWithdrawClick);
idDetailsBtn.addEventListener('click', handleButtonIdDetailsClick);
typeTransactionBtn.addEventListener('click', handleButtonTypeTransactionsClick);
