const categoriesItemsRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesItemsRef.length} категории.`);
categoriesItemsRef.forEach((el, index) => {
  console.group(`Категория ${index + 1}`);
  console.log(`Категория: ${el.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${el.querySelectorAll('li').length}`);
  console.groupEnd();
});
