const btn = document.getElementById('hamburger');
const ham = document.querySelector('.hamburger > img');
const menu = document.getElementById('menu');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (menu.classList.contains('nav-bar__menu_active')) {
    menu.classList.remove('nav-bar__menu_active');
    btn.title = 'active menu';
    ham.src = 'images/icon-hamburger.svg';
  } else {
    btn.title = 'close menu';
    menu.classList.add('nav-bar__menu_active');
    ham.src = 'images/icon-close.svg';
  }
});
