class Theme {
  constructor(switchClass, key, currTheme, nextTheme) {
    this.$el = document.querySelector(switchClass);
    this.key = key;
    this.currTheme = currTheme;
    this.nextTheme = nextTheme;
    this.switchClickHandler = this.switchClickHandler.bind(this);
  }

  changeTheme(currTheme, nextTheme) {
    document.body.classList.remove(currTheme);
    document.body.classList.add(nextTheme);
  }

  saveThemeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getThemeFromLocalStorage(key) {
    return localStorage.getItem(key);
  }

  switchClickHandler({ target }) {
    if (target.checked) {
      this.changeTheme(this.currTheme, this.nextTheme);
      this.saveThemeToLocalStorage(this.key, this.nextTheme);
      return;
    }
    this.changeTheme(this.nextTheme, this.currTheme);
    localStorage.setItem(this.key, this.currTheme);
  }

  init() {
    this.$el.addEventListener('change', this.switchClickHandler);
  }
}

export default Theme;
