const ADMIN_PASSWORD = 'jqueryismyjam',
  button3 = document.querySelector('#button-3'),
  solution3 = document.querySelector('.solution-3'),
  approve = 'Добро пожаловать!',
  decline = 'Доступ запрещен, неверный пароль!';
let passRequest = document.querySelector('#password');

button3.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(3);

  let password = passRequest.value;
  solution3.textContent = password === ADMIN_PASSWORD ? approve : decline;
});