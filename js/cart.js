/* Работаем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: 'apple', price: 50 }
 * { name: 'grapes', price: 70 }
 * { name: 'lemon', price: 60 }
 * { name: 'strawberry', price: 110 }
 */
const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  addProduct(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        console.log('Такой продукт уже есть, кол-во увеличено');
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
    console.log('Продукт добавлен');
  },

  remove(productName) {
    const items = this.items;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].name === productName) {
        console.log('Продукт найден, удаляем!');
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
    console.log('Корзина очищена');
  },

  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },

  increaseQuantity(product) {
    for (const item of this.items) {
      if (product === item.name) {
        item.quantity += 1;
        console.log('Количество увеличено');
        return;
      }
    }
  },

  decreaseQuantity(product) {
    for (const item of this.items) {
      if (product === item.name) {
        if (item.quantity === 1) {
          this.remove(product);
          console.log('Продукт удален из корзины');
          return;
        }
        item.quantity -= 1;
        console.log('Количество уменьшено');
        return;
      }
    }
  }
};

export default cart;
