import './scss/main.scss';
import './js/markupIntegration';
import Theme from './js/Theme';
import './js/lazyLoad';

const theme = new Theme(
  '.js-switch-input',
  'theme',
  'light-theme',
  'dark-theme'
);
if (theme.getThemeFromLocalStorage('theme') === 'dark-theme') {
  theme.changeTheme('light-theme', 'dark-theme');
  theme.$el.checked = true;
}
theme.init();
