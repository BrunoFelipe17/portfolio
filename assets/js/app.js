const openMenu = document.querySelector('.menu__mobile-circle');
const closeMenu = document.querySelector('.menu__mobile-close');
const menuMobile = document.querySelector('.menu__mobile-content');
const menuMobileItems = document.querySelectorAll('.menu__mobile-item');
let activeMenuMobile = document.querySelector('.menu__mobile-active');
const arrowsMobile = document.querySelectorAll('.icon-arrow');


const menuDesktopItems = document.querySelectorAll('.menu__desktop-item');
let activeMenuDesktop = document.querySelector('.menu__desktop-item-active')

openMenu.addEventListener('click', function() {
    menuMobile.style.left = '0%';   
    closeMenu.style.zIndex = 1001;
})

closeMenu.addEventListener('click', function() {
    closeMenuMobile()
})


var mySwiper = new Swiper('.swiper-container', {
    speed: 900,
    spaceBetween: 100,
    autoHeight: true,
    effect: 'slide',
    loop: 'true',
    breakpoints: {
        768: {
            speed: 1500
        }
    }
});


menuMobileItems.forEach(function(menuMobileItem) {
    menuMobileItem.addEventListener('click', function(e) {
        e.preventDefault();
        activeMenuMobile.classList.remove('menu__mobile-active');
        menuMobileItem.classList.add('menu__mobile-active');
        console.log(menuMobileItem.dataset.id)
        mySwiper.slideTo(menuMobileItem.dataset.id)
        activeMenuMobile = menuMobileItem;
        closeMenuMobile();
    })
})

arrowsMobile.forEach(function(arrows) {
    arrows.addEventListener('click', function() {
        mySwiper.slideNext()
    })
})

menuDesktopItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        activeMenuDesktop.classList.remove('menu__desktop-item-active')
        menuItem.classList.add('menu__desktop-item-active')
        activeMenuDesktop = menuItem

        mySwiper.slideTo(menuItem.dataset.id)
    })
})

function closeMenuMobile() {
    menuMobile.style.left = '150%';
    closeMenu.style.zIndex = 5;
}
