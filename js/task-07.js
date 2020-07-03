const button7 = document.getElementById('button-7'),
  login = document.getElementById('login'),
  logins = ['google', 'robot', 'qwerty'],
  solution7 = document.querySelector('.solution-7');

const isLoginValid = () => {
  return login.value.length >= 4 && login.value.length <= 16;
};

const isLoginUnique = (loginsArr) => {
  return !loginsArr.includes(login.value);
};

const addLogin = () => {
  if (!isLoginValid()) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!isLoginUnique(logins)) {
    return 'Такой логин уже используется!';
  }
  logins.push(login.value);
  return 'Логин успешно добавлен!';
};

button7.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(7);

  solution7.textContent = addLogin();
});
