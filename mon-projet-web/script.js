const burger = document.getElementById('burger');
const nav = document.getElementById('nave');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});