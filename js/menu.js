document.querySelector(".header-nav__link-submenu").addEventListener("click", function () {
    document.querySelector(".header-nav__menu").classList.toggle("seen");
});
document.querySelector(".header-nav__link-submenu-mobile").addEventListener("click", function () {
    document.querySelector(".header-nav__menu-mobile").classList.toggle("seen");
    document.querySelector(".header-nav__link-submenu-mobile").classList.toggle("seen-change");
})
const arrowBurger = document.querySelector('.header__menu');
const bodyBurger = document.querySelector('.header__mobile');
const logoBurger = document.querySelector('.header-logo');
const linkBurger = document.getElementById('close');
arrowBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
});
linkBurger.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
})