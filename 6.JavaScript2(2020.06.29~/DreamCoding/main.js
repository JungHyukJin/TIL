const toggleBtn = document.querySelector('.nav-bar__toggleBtn');
const menu = document.querySelector('.nav-bar__menu');
const icons = document.querySelector('.nav-bar__icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
})