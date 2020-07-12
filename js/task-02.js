const button2 = document.getElementById('button-2'),
  object = { mail: 'poly@mail.com', isOnline: true, score: 500 },
  solution2 = document.querySelector('.solution-2');

const countProps = (obj) => Object.values(obj).length;
const handleButtonClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(2);
  solution2.textContent = `В объекте ${countProps(object)} свойств`;
};

button2.addEventListener('click', handleButtonClick);
