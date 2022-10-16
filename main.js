const menu = document.querySelector('#mobile-menu')
const menuLisks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLisks.classList.toggle('active');
});