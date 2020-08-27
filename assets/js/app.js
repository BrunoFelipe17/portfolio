const openMenu = document.querySelector('.menu__mobile-circle');
const closeMenu = document.querySelector('.menu__mobile-close');
const menuMobile = document.querySelector('.menu__mobile-content');

openMenu.addEventListener('click', function() {
    menuMobile.style.left = '0%';
    closeMenu.style.zIndex = 1001;
})

closeMenu.addEventListener('click', function() {
    menuMobile.style.left = '150%';
    closeMenu.style.zIndex = 5;
})