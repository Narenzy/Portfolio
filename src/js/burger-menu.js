const btnEl = document.querySelector('.menu-button');
const navEl = document.querySelector('.nav');
const closeBtnEl = document.querySelector('.close-button');

btnEl.addEventListener('click', () => {
  console.log('clicked');
  navEl.classList.toggle('is-open');
});

closeBtnEl.addEventListener('click', () => {
  navEl.classList.remove('is-open');
});
