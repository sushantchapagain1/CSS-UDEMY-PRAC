'use strict';

// selecting elements

// FOR MENU WORKABLE IN MOBILE SCREEN
const menuBtn = document.querySelector('.menu-icon-mobile');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open-nav');
});

// Smooth Scrolls with event delagation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((links) => {
  links.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLink = links.getAttribute('href');
    if (currentLink === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    if (currentLink !== '#' && currentLink.startsWith('#')) {
      const sectionEL = document.querySelector(currentLink);
      sectionEL.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // Close nav on mobile after clicking links
    if (header.classList.contains('open-nav')) {
      header.classList.toggle('open-nav');
    }
  });
});

// Fixed Navbar

// Loader
const loader = document.querySelector('.loader');
window.onload = function () {
  loader.style.display = 'none';
};
