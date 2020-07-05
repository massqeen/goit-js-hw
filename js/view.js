import cart from './cart.js';
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'grapes', price: 70 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'strawberry', price: 110 });
cart.changeQuantity('lemon', -1);

// cart.remove('lemon');
// cart.clear();
console.log(`Стоимость товаров в корзине: ${cart.countTotalPrice()}`);
console.table(cart.getItems());
