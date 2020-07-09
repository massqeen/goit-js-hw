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
    this.balance += amount;
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
      console.log('недостаточно средств');
      return;
    }
    const withdrawTransaction = this.createTransaction(
      -amount,
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
    return 'транзакция не найдена';
  },
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    }
    if (transactionTotal === 0) {
      return 'данные операции не проводились';
    }
    return transactionTotal;
  }
};

console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.deposit(250));
console.table(account.transactions);
console.log(account.getBalance());
console.table(account.getTransactionDetails(3));
console.table(account.getTransactionTotal('withdraw'));
