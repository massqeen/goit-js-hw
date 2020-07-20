const button1 = document.getElementById('button-1'),
  email = document.getElementById('email'),
  login = document.getElementById('login'),
  solution1 = document.querySelector('.solution-1');

const handleButtonClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);

  solution1.textContent = '';
  user.name = userName.value;
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  for (const key of Object.keys(user)) {
    solution1.insertAdjacentHTML(
      'beforeend',
      `<p>${key}: <span class="task1-span">${user[key]}</span></p>`
    );
    document
      .querySelectorAll('.task1-span')
      .forEach((element) => (element.style.color = '#2ac940'));
  }
};

button1.addEventListener('click', handleButtonClick);
