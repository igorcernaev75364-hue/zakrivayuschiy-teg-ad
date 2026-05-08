const page = document.querySelector('.page');
const themeButtons = document.querySelectorAll('.theme-menu__button');

function setTheme(theme) {
  page.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.disabled = button.classList.contains(`theme-menu__button_type_${theme}`);
  });
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.className.match(/theme-menu__button_type_([a-z]+)/)?.[1];

    if (theme) {
      setTheme(theme);
    }
  });
});

setTheme('auto');
