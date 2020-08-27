const themeSwitchRef = document.querySelector('.js-switch-input');
const clickHandler = ({ target }) => {
  if (target.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    return;
  }
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
};
themeSwitchRef.addEventListener('click', clickHandler);
