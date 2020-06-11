const ordered = 50;
const total = 100;
Tinycon.setBubble(2);
console.log(`Ваш заказ: ${ordered} единиц`);

if (ordered >= total) {
  console.log(`Ваш заказ: ${ordered} единиц`);
  console.log('На складе недостаточно товаров!');
} else console.log('Заказ оформлен, с вами свяжется менеджер');