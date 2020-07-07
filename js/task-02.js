const button2 = document.getElementById('button-2'),
  object = { mail: 'poly@mail.com', isOnline: true, score: 500 },
  solution2 = document.querySelector('.solution-2');

const countProps = (obj) => {
  return Object.values(obj).length;
};

button2.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(2);

  solution2.textContent = `В объекте ${countProps(object)} свойств`;
});
