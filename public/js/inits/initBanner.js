import * as tutorial from '../tutorials/index.js';

const bannerElement = document.querySelector('#cookieBanner');

const closeButton = bannerElement.querySelector('#closeBanner');

closeButton.addEventListener('click', () => {
  bannerElement.remove();
});

const crossButton = bannerElement.querySelector('.close-banner');

crossButton.addEventListener('click', () => {
  bannerElement.remove();
});

const turorialButton = bannerElement.querySelector('#showTutorial');

turorialButton.addEventListener('click', () => {
  tutorial.authTutorial();
});
