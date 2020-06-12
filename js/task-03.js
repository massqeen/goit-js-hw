const ADMIN_PASSWORD = 'jqueryismyjam',
  approve = 'Добро пожаловать!',
  button3 = document.getElementById('button-3'),
  decline = 'Доступ запрещен, неверный пароль!',
  passwordEl = document.getElementById('password'),
  solution3 = document.querySelector('.solution-3');

button3.addEventListener('click', event => {
  event.preventDefault();

  Tinycon.setBubble(3);

  let password = passwordEl.value;
  solution3.textContent = password === ADMIN_PASSWORD ? approve : decline;
});
