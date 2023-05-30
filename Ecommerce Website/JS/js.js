const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.toggle('active', window.scrollY > 0);
});