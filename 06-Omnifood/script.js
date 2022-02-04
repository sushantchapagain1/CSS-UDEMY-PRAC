'use strict';

// selecting elements

// FOR MENU WORKABLE IN MOBILE SCREEN
const menuBtn = document.querySelector('.menu-icon-mobile');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open-nav');
});
