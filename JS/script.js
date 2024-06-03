'use strict'
const menu = document.querySelector(".menu");
const header = document.querySelector(".header-menu");
const burgerBtn = document.querySelector(".navbar-toggler");

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    burgerBtn.classList.toggle('menu--open');
    header.classList.toggle('header--open');
});